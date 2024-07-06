const express = require('express');

const router = express.Router();
const path = require('path');

const SalesService = require('../controllers/sales');

const sales = new SalesService();

router.get('/', async(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/sales/', 'sales.html'));
});


router.get('/add' , async(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../public/html/sales/', 'register.html' ));
});


router.get('/id:', async(req,res,next)=>{

});

router.get('/all', async(req,res,next)=> {
    const Allsales = await sales.find();
    res.json(Allsales);
});


router.post('/new', async (req,res,next)=>{
    

    const data  = req.body;
    
    console.log(data);
  // const newSale =  await sales.create(data);

  //  res.json(newSale);

});



module.exports = router;