$(function () {
  ///////////////////////////Submit Product Modal////////////////////////////////7

  // $("#submitMessageBtn").on("click", () => {
  //  $("#submitModal").modal("show");
  //
  //  });

  //////////////////////////////////////Submit Product to create///////////////////////////////7

  //  $("#productSubmitBtn").on("click", () => {
  //    $("#productform").submit();

  //  $("#submitModal").modal("hide");
  //  });

  ////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////Create Product ////////////////////////////////////////////////////

  $("#productform").on("submit", (event) => {
    
    event.preventDefault();
    let productname;
    let description
    let price;

    if ($("#name").val().length < 2  ||  parseFloat($("#name").val()) ) {
      
      $("#name").addClass("error");
      alert('Error con el nombre')
      
    } else {

      $("#name").removeClass("error");
      
       productname = $("#name").val();
         
    }
    if ($("#description").val().length < 5  || parseFloat($("#description").val()) ) {
      
      $("#description").addClass("error");
       alert('Error con la descripcion');
       
    } else {
        description = $("#description").val();
        console.log(description);

      $("#description").removeClass("error");
    }
    if (isNaN(parseFloat($("#price").val()))) {
      alert('Error con el precio');
      $("#price").addClass("error");

    } else {
      $("#price").removeClass("error");
       price = $("#price").val();
      
      console.log(price);

    } 

      if(productname && description && price ){
        $("#submitModal").modal("show");        
      }                
        
   
 

  });


});
