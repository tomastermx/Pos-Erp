  

  $(function(){
  
    let id

    let price

    let updateId

    let updateData
    
    $.getJSON('/products/all', (data)=>{
        
        $.each(data, (i, value) => {
            const newRow = document.createElement("tr");
            
            newRow.setAttribute("id" ,  value.id); 

            newRow.innerHTML = '<td>'+value.name +'</td> <td>'+ value.description +'</td> <td><input type="text" class="form-control" value=" '+ value.price + '">   </td> <td> <button type="button" class="btn btn-success update">Actualizar</button> </td>'  
            
            console.log(value);

            $("tbody").prepend(newRow);

        })

    });

    ////////////////////////////////Data Change Validator/////////////////////////////
     
    $("body").on("change","input",function(){
      $(this).addClass("change");
      }); 
 

     ////////////////////////////Updating  Data//////////////////////



      $("body").on("click", "button.update", function() {
        console.log($(this).closest('tr').attr('id'))
         
        console.log($(this).closest('tr').find('input').val())
         
        


        if( $(this).closest('tr').find('input').hasClass("change")){
 
          id =  $(this).closest('tr').attr('id');
          price = $(this).closest('tr').find('input').val();
                
          updateId={"id":id}            
          
          changes = {"price":price}


         
          
          $("#modal").modal("show");   

        } else {

          alert('No se modificó el precio');

        }

 

      }); 
     
       $("#saveBtn").on("click", ()=>{
          
           updateData= {...updateId , updates:{...changes}}         
          
           console.log('funcionando saVEbTN');
           console.log(updateData);

           $.ajax({
            url: '/products/update',
            type: 'PUT',
            data: updateData,
            success: function (result) {
              
              $("#modal").modal("hide"); 
               
            }
        });


       });

 
  });