
const express = require("express");

const router = express.Router();
const path = require('path');

const StoreService = require('../controllers/stores');

const store = new StoreService();

  router.get('/all', async(req,res,next)=>{
          
             const stores = await store.find();    

             res.json(stores);


     }); 

   
       router.get('/add',(req,res,next)=>{
              
        res.sendFile(path.join(__dirname, '../public/html/stores/', 'register-store.html'));
      });




    router.post('/new', async (req, res, next) => {

      let data = req.body;
      console.log(data);

      const newStore = await store.create(data);
      res.json(newStore);
  });


    router.get('/id:', async (req, res, next) => {
    
       let Onestore = await store.findOne();

       res.json(Onestore);
    });


    router.patch('/id:',async(req,res,next)=>{

    });
    
    router.delete('/id:',async(req,res,next)=>{
    
    });
    












module.exports = router;





