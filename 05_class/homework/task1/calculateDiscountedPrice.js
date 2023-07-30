// Accepts the discounts as values in the range of 0 to 100

const calculateDiscountedPrice = (products, discount) => {
  // Converts discount to decimal, to calculate final price
  // with a simple multiplication
  const discountToDecimals = (100 - discount) / 100;

  // Calculating new array with discount applied
  const discountedProductsPrice = products.map((el) => el * discountToDecimals);
  return discountedProductsPrice;
};

module.exports = calculateDiscountedPrice;
