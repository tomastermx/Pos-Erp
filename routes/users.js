

const express = require("express");

const router = express.Router();
const path = require('path');


router.get('/dashboard',(req,res,next)=>{
  
    res.sendFile(path.join(__dirname, '../public/html/users/', 'user-main.html'));
});



module.exports = router;

