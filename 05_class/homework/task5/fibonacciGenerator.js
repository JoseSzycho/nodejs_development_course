const fibonacciGenerator = (number) => {
  let previousNumber = 0;
  let nextNumber = 1;

  const fibonacciReturn = () => {
    const toReturn = nextNumber;
    nextNumber = nextNumber + previousNumber;
    previousNumber = toReturn;

    return toReturn;
  };

  return fibonacciReturn;
};

module.exports = fibonacciGenerator;
