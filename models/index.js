

  const {Sale,  SalesSchema } = require('../models/sales');
  const {Product, productSchema} = require('../models/product');
  const {SaleItems,SaleItemsSchema} = require('./saleitems.js');
  const {Store, StoreSchema} = require('../models/store');

 function setupModels(sequelize){

    Sale.init(SalesSchema, Sale.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    SaleItems.init(SaleItemsSchema, SaleItems.config(sequelize));
    Store.init(StoreSchema, Store.config(sequelize));


   Sale.associate(sequelize.models);
   Product.associate(sequelize.models); 
   SaleItems.associate(sequelize.models);


 }


module.exports = setupModels;