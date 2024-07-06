
const { models } = require("../lib/sequelize");


 class StoreService {
     constructor(){

     }
    
      async create(data){
           const  store  = await models.Store.create(data);
           return store;
     }

     async findOne(id){
        const store = await models.Store.findByPk(id);
        return store;
     }

     async find(){
        const Allstores = await models.Store.findAll();
        return Allstores;
        
     }

     async update(){
         const ustore = await models.Store.update();
         return ustore;
     }

     async delete(){

     }
 }

  module.exports = StoreService;