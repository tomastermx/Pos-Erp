const { Model, Sequelize, DataTypes } = require("sequelize");
const { PRODUCTS_TABLE } = require("./product");

const SALES_TABLE = "sales";

const SalesSchema = {
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

  totalAmount: {
    type: DataTypes.FLOAT,
  },
};

class Sale extends Model {
  static associate(models) {
   this.belongsToMany(models.Product,{through:'SaleItems'}); 
   this.belongsTo(models.Store);
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_TABLE,
      modelName: 'Sale',
      timestamps: false
    }
     
  }

}

module.exports = { SALES_TABLE, SalesSchema, Sale };
