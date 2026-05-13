
const bcrypt = require("bcryptjs");
const { models } = require("./lib/sequelize");

 async function initAdmin() {
  
  try{
 
  const user  = await models.User.findOne({where:{email: process.env.ADMIN_EMAIL}});

  if (user){  
     return user
     console.log("User exists");
      return user;
   }
   
    const salt =  await bcrypt.genSalt(10);
    const securepass = await bcrypt.hash(process.env.ADMIN_PASSWORD,salt);
   
     const admin = await models.User.create({
      email:process.env.ADMIN_EMAIL, 
      password:securepass,
      firstname:process.env.ADMIN_FIRSTNAME || 'Admin',
      lastname:process.env.ADMIN_LASTNAME || 'ErpMaster',
      role:'admin' 
      
    });
     return admin;

  } catch (err) {
    console.error(" Error creating admin:", err);
    return null;

}
 }
module.exports = initAdmin;

