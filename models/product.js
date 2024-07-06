const { Model, Sequelize, DataTypes } = require("sequelize");

const { SALES_TABLE } = require("./sales");


const PRODUCTS_TABLE = "product";

productSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },

  description:{
    allowNull:false,
    type: DataTypes.STRING,
    field: "description"
  },

  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "price",
  },
};

class Product extends Model {
  static associate(models){
    this.belongsToMany(models.Sale,{through:'SaleItems'});
    this.belongsToMany(models.Store,{through:'Inventory'});
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCTS_TABLE, productSchema, Product };
