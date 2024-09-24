const ordersModels = require('./orders_models')

module.exports = {
 Query: {
  orders: () => {
   return ordersModels.getAllOrders()
  }
 }
}