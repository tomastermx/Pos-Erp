const { Model, Sequelize, DataTypes } = require("sequelize");

const STORE_TABLE = "store";

const StoreSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,

  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },

  street:{
    allowNull:false,
    type: DataTypes.STRING,
    field:"street"
  }



  
};

class Store extends Model {
  static associate(models) {
    this.hasMany(models.Sale)
    this.belongsToMany(models.Product,{through:'Inventory'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STORE_TABLE,
      modelName: "Store",
      timestamps: false,
    };
  }
}

module.exports = { STORE_TABLE, StoreSchema, Store };
