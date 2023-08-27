const checkInputError = (...args) => {
  for (let el of args) {
    if (typeof el != "number") throw new TypeError("Input must be a number.");
    if (el <= 0 || Number.isNaN(el)) throw new Error("Input must be positive");
  }
};

module.exports = { checkInputError };
