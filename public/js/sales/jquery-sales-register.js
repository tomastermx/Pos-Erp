$(function () {
  console.log("funcionando");

  let sale;

  /// Get all stores ///////////////////////////////////

  $.getJSON("/stores/all", (data) => {
    console.log(data);
    $.each(data, (i, value) => {
      const option =
        '<option value="' + value.id + '">' + value.name + "</option>";

      $("#selection").prepend(option);
    });
  });

  ///// get all products ///////////////////////////////

  $.getJSON("/products/all", (data) => {
    console.log(data);

    $.each(data, (i, value) => {
      const betaRow = document.createElement("div");

      betaRow.classList.add("row", "gy-2", "align-items-center");

      const newLabel = document.createElement("div");
      newLabel.classList.add("col", "gy-4");
      newLabel.innerHTML =
        '<label for="inputEmail3" class="col-sm-8 col-form-label for">' +
        value.name +
        "</label>";

      const newInput = document.createElement("div");
      newInput.classList.add("col", "gy-4");
      newInput.innerHTML =
        '<input id="' +
        value.id +
        '" type="text" class="form-control" placeholder="0" >';

      betaRow.append(newLabel);
      betaRow.append(newInput);

      $("#maincol").prepend(betaRow);
    });
  });

  ///////////////////////////////////////////////////////////

  ////////////// Create  new Sale////////////////////////////
  $("#myform").on("submit", (event) => {
    event.preventDefault();

    const store = $("#selection").val();

    const form = document.getElementById("myform");
    const inputs = form.getElementsByTagName("input");
    const products = [];

    let invalid = 0;
    let nostore = 0;
    ///////////////////////////////////Testint Input Entries///////////
    for (let i = 0; i < inputs.length; i++) {
      if (isNaN(parseFloat(inputs[i].value)) && inputs[i].value !== "") {
        $("#" + inputs[i].id).addClass("error");

        invalid++;
        console.log(invalid);
      } else if (!store) {
        nostore++;
      } else if (inputs[i].value && parseFloat(inputs[i].value) > 0) {
        $("#" + inputs[i].id).removeClass("error");

        const item = { id: inputs[i].id, qty: parseFloat(inputs[i].value) };
        products.push(item);
      }
    }

    if (invalid > 0) {
      alert("Datos Inválidos");
    } else if (nostore > 0) {
      alert("Se debe seleccionar una tienda");
      $("#selection").addClass("error");
    }

    if (products.length === 0) {
      alert("Venta vacía");
      console.log(products);
    } else if (products.lenght !== 0) {

      sale = { store: store,products };
      console.log(sale);

      $("#saleModal").modal("show");
    }
  });

  //////////////////////////////////////////////////////////////////////////

  ////////////////////////////Confirm new Sale//////////////////////////////

  $("#confirmSaleBtn").on("click", () => {
     $.post("/sales/new", sale, (data) => {
      window.location.replace("/sales");
    });
  
  });

  ///////////////////////////////////////////////////////////////////////////////7
});
