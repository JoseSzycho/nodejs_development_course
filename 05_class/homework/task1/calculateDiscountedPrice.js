// Accepts the discounts as values in the range of 0 to 100
const calculateDiscountedPrice = (products, discount) => {
  const errorIfNotValidPrice = (el) => {
    if (typeof el != "number")
      throw new TypeError("Cannot operate over this element.");
    if (el < 0) throw new TypeError("Cannot operate with negative numbers.");
  };

  // Checking for input error
  products.forEach(errorIfNotValidPrice);
  if (discount > 100 || discount < 0)
    throw new Error("Discount must be in range of 0 - 100");

  // Converts discount to decimal, to calculate final price
  // with a simple multiplication
  const discountToDecimals = (100 - discount) / 100;

  // Calculating new array with discount applied
  const discountedProductsPrice = products.map((el) => el * discountToDecimals);
  return discountedProductsPrice;
};

module.exports = calculateDiscountedPrice;
