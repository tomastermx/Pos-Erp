$( function(){

    alert('funciondando');

     $('#productform').on('submit',(event)=>{

        event.preventDefault();

        let name = $("#name").val();
        let description =  $("#description").val();
        let price =  $("#price").val();
        
          console.log(name);
          console.log(description);
          console.log(price);
    



           if(name.split("").length < 2){
            $("#name").addClass("error");
            } else {
            $("#name").removeClass("error");  
          }
           if(description.split("").length < 5 ){ 
           $("#description").addClass("error");
          } else { 
            $("#description").removeClass("error");
          } 
           if(isNaN(parseFloat(price))){
            $("#price").addClass("error");
            }

               

         
         // $.post()

     });




    
})