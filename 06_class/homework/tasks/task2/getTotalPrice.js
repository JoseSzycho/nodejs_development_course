const getTotalPrice = (obj) => {
  // Object for storing price
  const product = {
    price: 0,
    quantity: 0,
  };

  // Storing price of incoming object
  Object.keys(product).forEach(
    (key) => (product[key] = Object.getOwnPropertyDescriptor(obj, key).value)
  );

  // Checking if data types are valid
  Object.keys(product).forEach((key) => {
    if (!(product[key] > 0) || typeof product[key] !== "number") {
      // NaN and negative values gives true, so is an error
      throw new TypeError(`${key} must be a valid number.`);
    }
  });

  return product.price * product.quantity;
};

module.exports = { getTotalPrice };
