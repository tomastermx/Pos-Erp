  

  $(function(){
  
    
    $.getJSON('/products/all', (data)=>{
        
        $.each(data, (i, value) => {
            const newRow = document.createElement("tr");   
            newRow.innerHTML = '<td>'+value.name +'</td><td>'+ value.description +'</td><td>  <input type="text" class="form-control" value="'+ value.price + '">   </td><td> <button type="button" class="btn btn-success">Actualizar</button> </td>'  
            
            console.log(value);

            $("#maintable").prepend(newRow);

        })

    });

  });