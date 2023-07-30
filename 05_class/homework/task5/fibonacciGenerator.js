const fibonacciGenerator = (number) => {
  // Intial conditions for calculating next numbers
  let previousNumber = 0;
  let nextNumber = 1;

  const fibonacciReturn = () => {
    const toReturn = nextNumber; // Value saved to not lost it
    nextNumber = nextNumber + previousNumber; // Calculating next finonacci secuence
    previousNumber = toReturn; // Saving actual number as previousNumber for future calculation

    return toReturn;
  };

  return fibonacciReturn;
};

module.exports = fibonacciGenerator;
