const errorIfNotFunc = (el) => {
  if (!(typeof el == "function")) throw new Error("Not a valid function.");
};

const errorNotValidArity = (el) => {
  if (!(el > 0)) throw new Error("Not a valid arity.");
};

const curry = (func, arity) => {
  // Checking for input errors
  errorIfNotFunc(func);
  errorNotValidArity(arity);

  // Stores argument of each call
  const args = [];

  // Function that evaluates if we should receive another argument
  // or if we should return the function func evaluation
  const toCurry = (el) => {
    // It is difficult to check if "el" is a valid argument,
    // as we do not know the shape of the func sent by the user

    // Skips if a missing argument
    if(el === "_") return toCurry;

    // Storing called argument
    args.push(el);

    // If all arguments have been stored
    if (args.length == arity) {
      // Evaluate function and return result
      return func(...args);
    }
    // Else, return toCurry for storing another argument
    return toCurry;
  };

  return toCurry;
};

module.exports = curry;