require('dotenv').config();

const express = require('express');
const app = express();

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const initAdmin = require('./initAdmin');
const sequelizeDB = require('./lib/sequelize');
const setupModels = require('./models');

require('./auth/index');
require('./auth/passport');

// Middlewares básicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_KEY || 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/sales', require('./routes/sales'));
app.use('/products', require('./routes/products'));
app.use('/stores', require('./routes/stores'));
app.use('/orders', require('./routes/orders'));

app.use(express.static('public'));

// Error handler
const { boomErrorHandler } = require('./middleware/errorhandler');
app.use(boomErrorHandler);

// Puerto
const PORT = process.env.PORT || 3000;

// 🚀 Arranque limpio SIN función externa
(async () => {
  try {
    await sequelizeDB.authenticate();
    console.log('✅ Conectado a MySQL');

    setupModels(sequelizeDB);
    await sequelizeDB.sync();
    await initAdmin();    

    console.log('📦 Modelos sincronizados');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error conectando a DB:', error);
    process.exit(1);
  }
})();

module.exports = app;
