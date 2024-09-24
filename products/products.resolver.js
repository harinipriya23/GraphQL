const productsModels = require('./products_models')

module.exports = {
 Query: {
  products: () => {
   return productsModels.getAllProducts()
  },
  productsByPrice: (_,args) => {
   return productsModels.getProductsByPrice(args.min, args.max)
  },
  productById: (_, args) => {
   return productsModels.getProductById(args.id)
  }
 },
 Mutation: {
  addNewProduct: (_, args) => {
   return productsModels.addNewProduct(args.id, args.description, args.price)
  },
  addNewProductReview: (_, args) => {
   return productsModels.addNewProductReview(args.id, args.rating, args.comment)
  }
 }
}