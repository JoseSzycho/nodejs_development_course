const getTotalPrice = (obj) => {
  const product = {
    price: 0,
    quantity: 0,
  };

  Object.keys(product).forEach(
    (key) => (product[key] = Object.getOwnPropertyDescriptor(obj, key).value)
  );

  // Checking if data types are valid
  for (let key in product) {
    if (!(product[key] > 0) || typeof product[key] !== "number" ) { // NaN and negative values gives true, so is an error
      throw new TypeError(`${key} must be a valid number.`);
    }
  }
  return product.price * product.quantity;
};

module.exports = { getTotalPrice };
