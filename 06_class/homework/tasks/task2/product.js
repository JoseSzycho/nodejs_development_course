const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

const properties = ["price", "quantity"];

properties.forEach((property) =>
  Object.defineProperty(product, property, {
    enumerable: false,
    writable: false,
  })
);

module.exports = { product };
