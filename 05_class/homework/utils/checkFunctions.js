const errorIfNotValidPrice = (el) => {
  if (typeof el != "number")
    throw new TypeError("Cannot operate over this element.");
  if (el < 0) throw new TypeError("Cannot operate with negative numbers.");
};

module.exports = {
  errorIfNotValidPrice,
};
