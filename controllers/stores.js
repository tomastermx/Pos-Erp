
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

       async update(id,updates){
          console.log(updates)
          const store =   await this.findOne(id);
          const updatestore =  await store.update(updates);
          return updatestore
      }

      async delete(id){
       const dstore = await this.findOne(id);
       dstore.destroy();
       return dstore;
     }
 }

  module.exports = StoreService;