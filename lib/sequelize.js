const { Sequelize } = require('sequelize');

const setupModels = require('../models/index');



     const sequelize = new Sequelize('erpDB' , 'erpmaster', 'tool2024#', {
     host: 'localhost',
     port:  3306,
     dialect: 'mysql',

    
    });

    setupModels(sequelize);

    sequelize.sync({  });



  module.exports = sequelize;