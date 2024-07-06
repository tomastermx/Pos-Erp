
const { models } = require('../lib/sequelize');

 class SaleItems {

     constructor(){

     }

     async create(data){
        const saleitems = await models.SaleItems.create(data);
        return saleitems;
     }

      async find(){
    
     }

 } 