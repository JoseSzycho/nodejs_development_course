const calculateTotalPrice = (priceOfProducts) => {
  const errorIfNotValidPrice = (el) => { 
    if (typeof el != "number")
      throw new TypeError("Cannot operate over this element.");
    if (el < 0) throw new TypeError("Cannot operate with negative numbers.");
  };

  // Checkinf for input error
  priceOfProducts.forEach(errorIfNotValidPrice);

  const totalPrice = priceOfProducts.reduce((sum, el) => sum + el, 0);
  return totalPrice;
};

module.exports = calculateTotalPrice;
