  

  $(function(){
  
    
    $.getJSON('/products/all', (data)=>{
        
        $.each(data, (i, value) => {
            const newRow = document.createElement("tr");
            
            newRow.setAttribute("id" ,  value.id); 

            newRow.innerHTML = '<td>'+value.name +'</td> <td>'+ value.description +'</td> <td><input type="text" class="form-control" value=" '+ value.price + '">   </td> <td> <button type="button" class="btn btn-success bocho">Actualizar</button> </td>'  
            
            console.log(value);

            $("tbody").prepend(newRow);

        })

    });

    ////////////////////////////////Change data/////////////////////////////
      $("body").on("change","input",function(){
      $(this).addClass("change");
    }); 





     ////////////////////////////Updating  Data//////////////////////



      $("body").on("click", "button", function() {
        console.log($(this).closest('tr').attr('id'))
         
        console.log($(this).closest('tr').find('input').val())
         
        


        if( $(this).closest('tr').find('input').hasClass("change")){
            console.log('true');
        } else {
          console.log("false");
        }

 

      }); 
     
    

 
  });