$(function () {
  ////Get all stores///////////////////////////////

  $.getJSON("/stores/all", (data) => {
    $.each(data, (i, value) => {
      let option = "<option value=" + value.id + ">" + value.name + "</option>";

      $("#select").append(option);
    });
  });

  /// Get all products

  $.getJSON("/products/all", (data) => {
    $.each(data, (i, value) => {
      const row =
        '<th id="' +
        value.id +
        '" scope="col">' +
        value.name +
        " " +
        "lts." +
        "</th>";

      $("tr").append(row);
    });

    const totalrow = '<th scope="col"> Monto Total </th>';

    $("tr").append(totalrow);
  });

  //////// Get all Orders /////////////////////////////////////////777

  $.getJSON("/sales/all", (data) => {
    const table = document.getElementById("maintable");
    const head = table.getElementsByTagName("th");

    console.log(head.length);

    const newRow = document.createElement("tr");

    $.each(data, (i, value) => {
      console.log(value);
      const newRow = document.createElement("tr");

      let date = new Date(value.createdAt);

      newRow.innerHTML =
        "<td>" +
        date.getDay() +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear() +
        "-" +
        date.getHours() +
        ":" +
        date.getMinutes() +
        "</td><td>" +
        value.Store.name +
        "</td>";

      const productMap = {};
      for (let j = 0; j < value.Products.length; j++) {
        const product = value.Products[j];
        productMap[product.id] = product.SaleItems.quantity || 0;
      }

      for (let k = 2; k < head.length - 1; k++) {
        const header = head[k];
        const rowData = document.createElement("td");
        rowData.innerHTML =
          productMap[header.id] !== undefined ? productMap[header.id] : "0";
        newRow.appendChild(rowData);
      }

      let rowData = document.createElement("td");
      rowData.innerHTML = value.totalAmount;
      newRow.append(rowData);

      $("#maintable").append(newRow);
    });
  });

  ///////////////// Csv Modal ///////////////////////////////////////////7
   
     $("#csv").on('click',()=>{
         
      $("#csvModal").modal("show");

     });


   //////////////////////////////////CSV////////////////////////////////////

   $("#csvBtn").on('click',()=>{
     
    let  limit = $("#limit").val();




    window.location.href = '/sales/get-csv?limit=' + limit;
       

   })
     


           


});
