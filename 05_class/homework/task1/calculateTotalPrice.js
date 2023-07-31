const { errorIfNotValidPrice } = require("../utils/checkFunctions");

const calculateTotalPrice = (priceOfProducts) => {
  priceOfProducts.forEach(errorIfNotValidPrice);
  const totalPrice = priceOfProducts.reduce((sum, el) => sum + el, 0);
  return totalPrice;
};

module.exports = calculateTotalPrice;
