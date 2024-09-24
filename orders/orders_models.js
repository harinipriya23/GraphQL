const orders = [
 {
   date: "2020-05-05",
   subtotal: 250.2,
   items: [{
     product: {
       id: "iphone",
       description: "Iphone 15 promax",
       price: 250.2,
     },
     quantity: 1,
   }],
 },
]
function getAllOrders() {
  return orders
}
module.exports = {
 getAllOrders
}