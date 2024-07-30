const { models } = require("../lib/sequelize");
const { Product } = require("../models/product");
const { Store } = require('../models/store');
const { SaleItems } = require("../models/saleitems");


class SalesService {
  constructor() {}

  async create(data) {
    console.log(data);
    console.log(data.store);
  
      let totalSale = 0;
  
     const newSale = await models.Sale.create({ totalAmount: 0 });
     const store = await models.Store.findByPk(data.store);
  
     
    

      for (const dataProduct of data.products) {
      console.log(dataProduct.id);

      const product = await models.Product.findByPk(dataProduct.id);

      console.log(product);

        await models.SaleItems.create({
        SaleId: newSale.id,
        ProductId: product.id,
        quantity: dataProduct.qty,
        price: product.price,
      });

      totalSale += product.price * dataProduct.qty;
    }

    newSale.update({ totalAmount: totalSale });
    newSale.update({StoreId:store.id});
      return newSale;   
     
  }

  async findOne(id) {
    const sale = await models.Sale.findByPk(id);
    return sale;
  }

  async find(limit) {
    console.log(limit);
    const sale = await models.Sale.findAll({ 
      include:  [{
        model: Product,
        through: {
          attributes: ["quantity"],
        },

        attributes: ["id", "name"], // Select product attributes to display
      }, {model:  Store } ], order: [['create_at', 'DESC']], limit:limit
    });

    return sale;
  }


  
}


module.exports = SalesService;