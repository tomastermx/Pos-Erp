

$(function(){
  
     ////Get all stores/////////////////////////////// 

      $.getJSON('/stores/all',(data)=>{
           

          $.each(data, (i,value)=>{

           let option = "<option value=" + value.id +">" + value.name  + "</option>"
               
           $("#select").append(option);

          });



       }) ;






     /// Get all products

     $.getJSON('/products/all',(data)=>{
        
         $.each(data,(i,value)=>{

            const row = '<th id="'+ value.id +  '" scope="col">' + value.name  +' ' +'lts.' + '</th>'

            $("tr").append(row);
            

         });
         
          const totalrow = '<th scope="col"> Monto Total </th>'
            
          $("tr").append(totalrow);

         
     });


     //////// Get all Orders /////////////////////////////////////////777

     $.getJSON('/sales/all',(data)=>{
           
        const table =  document.getElementById('maintable');
        const  head = table.getElementsByTagName('th');

        console.log(head.length);
         
        const  newRow = document.createElement('tr');
        
        
         $.each(data, (i,value)=>{
            console.log(value);
            const  newRow = document.createElement('tr');   

             let date = new Date(value.createdAt);

             newRow.innerHTML='<td>' + date.getDay() +"-"+ date.getMonth() + "-"+ date.getFullYear()  +'</td><td>'+ value.Store.name +'</td>'


             const productMap = {};
             for (let j = 0; j < value.Products.length; j++) {
                 const product = value.Products[j];
                 productMap[product.id] = product.SaleItems.quantity || 0;
             }

             for (let k = 2; k < head.length -1; k++) {
               const header = head[k];
               const rowData = document.createElement('td');
               rowData.innerHTML = productMap[header.id] !== undefined ? productMap[header.id] : "0";
               newRow.appendChild(rowData);
           }
              
             /*
             
              for(let i =0; i < head.length ; i++){
                   for(j=0; j < value.Products.length; j++){
                       
                     
                          if(head[i].id == value.Products[j].id){
                        
                           let rowData = document.createElement('td');
                         
                            let amount = value.Products[j].SaleItems.quantity
                         
                            rowData.innerHTML =  amount
                         
                        
                           newRow.append(rowData);                  
                     
                         }  
                        
                        
                       }
                                             

              } 
              */   
              let rowData = document.createElement('td');
              rowData.innerHTML = value.totalAmount;
              newRow.append(rowData); 
              



              $('#maintable').append(newRow);


         });
         

       // let newRow = `<tr> <div class="row"> <td>  ${value.year}  </td><td> <div class="col"> <a href="/thesis/page/${value.id}">${value.title}</a> </div>  </td><td>${value.lastName}, ${value.name} </td> <td> ${value.alastName},  ${value.aName}</td> <td> ${value.grade}</td> </div> </tr>`
      //  $('#maintable').append(newRow);
        
     //      for(let i = 0; i < head.length; i++){
               
      //       newcolumn.innerHTML = '<td> 1  </td>' ;

      //       newRow.append(newcolumn);


           
           });
    

      

      })


