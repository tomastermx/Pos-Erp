const express = require('express');
const { Parser } = require('json2csv');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const SalesService = require('../controllers/sales');

const sales = new SalesService();


const ProductService = require('../controllers/products');
  
const products = new ProductService();





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
    
    const newSale =  await sales.create(data);

   res.json(newSale);
  
});

////////////////////////////////Export Sales CSV///////////////////////////

   router.get('/get-csv', async (req,res,next)=>{

     let  limit =  parseInt(req.query.limit) || null;
     
     console.log(limit + 'routes' );

    const csvSales  =    await sales.find(limit);
    const allproducts  = await  products.find(); 

    let arrayProducts =  allproducts.map((item)=>{
         return item.name;
    })

//   console.log(csvSales);
  console.log(arrayProducts);
  
    const fields = [
        { label: 'Date', value: 'Date' },
        { label:'Store', value:'Store'},
         ...arrayProducts.map(product =>({
             label:product,
             value: row => row[product] || 0
         })),
        {label:'Total', value:'total'} 
    ];
 
  

   
     const data = csvSales.map(sales =>{

          console.log(sales.totalAmount);
          console.log(sales.id);
            const saleQuantities = {}

            arrayProducts.forEach(product=>{

                saleQuantities[product]=0;
                
            });
                console.log(saleQuantities);

              sales.Products.forEach( products => {
                

                      if(arrayProducts.includes(products.name)){
                        saleQuantities[products.name] = products.SaleItems.quantity;
                        
                      }

               });
              
             return { Date:sales.createdAt,
                     Store: sales.Store.name,
                     ...saleQuantities,
                     total:sales.totalAmount  
               };

     })

    //////Create Csv/////////////////////////////////////////////
    const opts = { fields };
    const parserCsv = new Parser(opts);
    const csv =  await parserCsv.parse(data); 
     ///////Assign location and name///////////////////////////////////////
    const filePath = path.join(__dirname,'../' ,'data.csv');
    
    fs.writeFileSync(filePath , csv);
    ///////Send File/////////////////////////////////////////////////////

    res.download(filePath, 'data.csv', (err) => {
      if (err) {
        console.error('Error al descargar el archivo:', err);
        res.status(500).send('Error al descargar el archivo.');
      }
  
      // Opcional: Eliminar el archivo después de la descarga
      
    });
        



  });
 

module.exports = router;