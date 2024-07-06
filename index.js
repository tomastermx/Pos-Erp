const express = require('express');
const bodyParser = require('body-parser');
//let cookieParser = require('cookie-parser');
//let logger = require('morgan');

const  app = express();

const sequelizeDB = require('./lib/sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

app.use(express.static('public'));


const SalesRouter = require('./routes/sales');
const indexRouter = require('./routes/index');
const  productsRouter = require('./routes/products');
const  StoreRouter = require('./routes/stores');

app.use('/', indexRouter);
app.use('/sales', SalesRouter);
app.use('/products',productsRouter);
app.use('/stores', StoreRouter);

app.listen(3000,()=>{console.log('connected to port 3000')});



module.exports = app;
