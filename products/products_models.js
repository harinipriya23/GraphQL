const products = [
  {
    id: "redshoe",
    description: "The Red Shoe",
    price: 34.5,
    review: [],
  },
  {
    id: "bluejeans",
    description: "The Blue Jeans",
    price: 89.5,
    review: [],
  },
  {
    id: "iphone",
    description: "Iphone 15 promax",
    price: 250.2,
    review: [],
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}
function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    review: [],
  };
  products.push(newProduct);
  return newProduct;
}
function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.review.push(newProductReview);
    return newProductReview;
  }
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
