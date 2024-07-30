
const { models } = require('../lib/sequelize');


class ProductService{

  constructor(){

  }

       async create(data){
          
        const newProduct = await models.Product.create(data);
        console.log(newProduct);
        return newProduct;

    }

      async find(){
           const  products  = await models.Product.findAll();
           return products;
      } 

      async findOne(id){
          const oneProduct = await models.Product.findByPk(id);
          return oneProduct;

      }

      async update(id, updates){
           
          console.log(id);
          console.log(updates)
          const product = await this.findOne(id);
          const updateproduct = await product.update(updates);
          return updateproduct;
     }

      async delete(id){
          const product = await this.findOne(id);
           await product.destroy();
           return product
      }

} 

module.exports = ProductService;