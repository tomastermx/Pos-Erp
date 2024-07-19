
 $(function(){


  
  
    $("#storeform").on("submit" , (event)=>{
        
        
        event.preventDefault();


        let storename
        let address    

        if( $("#storename").val().length < 2 ){

          $("#storename").addClass("error");
        } else {

           $("#storename").removeClass("error");
           let storename = $("#storename").val(); 
        } 


        if( $("#address").val().length < 3 ){

          $("#address").addClass("error");
        } else {

          $("#address").removeClass("error");
          let address = $("#address").val();  
        }


        $("#storemodal").modal("show");



    });

 })