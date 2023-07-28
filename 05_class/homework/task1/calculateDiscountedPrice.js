// Acceptes the discounts as values from in the range of 0 to 100, and then convert
// to decimals for performing the operations

const calculateDiscountedPrice = (products, discount) => {
  const discountToDecimals = (100 - discount) / 100;
  const discountedProductsPrice = products.map((el) => el * discountToDecimals);
  return discountedProductsPrice;
};

module.exports = calculateDiscountedPrice;
