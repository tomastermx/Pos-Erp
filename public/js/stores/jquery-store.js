
$(function(){

     $.getJSON('/stores/all',(data)=>{
                    
            console.log(data);
           
          $.each(data, (i, value)=> {
            const newRow = document.createElement("tr");
             newRow.innerHTML = '<td><input type="text" class="form-control" value="'+ value.name + '"> </td> <td>   <input type="text" class="form-control" value="'+ value.street + '"> </td> <td>33432432432</dt><td><button type="button" class="btn btn-success">Editar</button></td>'


             $("#maintable").prepend(newRow);

          });


     }); 

  


});