const { models } = require("../lib/sequelize");
const { Store } = require('../models/store');
const passport = require('passport');
const bcrypt = require('bcryptjs');

class userService {
  constructor() {}

  async create(data) {

    console.log(data);
    const  {email, password , role, StoreId } = data;
    const salt =  await bcrypt.genSalt(8);
    const securepass = await bcrypt.hash(password,salt);
     
     delete  data.password
      
     data.password = securepass;
     

     const user = await models.User.create(data);
     return user;
  }
  
   async findByEmail(email){

    const user  = await models.User.findOne({where:{email: email }});
    return user;
   } 

   async findOne(id){
    const user = await models.User.findByPk(id);
    return user;
   }

    async find(){
    const user = await models.User.findAll({include:[{model:Store}]});
    return user;
   }
    
    async delete(){
        const user = await  models.User.destroy();
    }
    
    async update(id, updates){
          
         const user = await this.findOne(id);

       if(updates.password){
         console.log('password' + updates.password );
         
         const salt =  await bcrypt.genSalt(8);
         const securepass = await bcrypt.hash(updates.password,salt);

         console.log(securepass);    
         
         
         user.update({password:securepass});

         console.log(user.password);

       }

     
       
       


       return user;


    }

}
  
  module.exports = userService;