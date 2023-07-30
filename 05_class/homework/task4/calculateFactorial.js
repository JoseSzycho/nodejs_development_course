const calculateFactorial = (number) => {
  if (number == 0) return 1; // using this evaluation outside recursive fuction to not evaluate it in every run
  if (number <= 0)
    throw new Error("Cannot calculate factorial of negative numbers");

  // There are going to be as many multiplication operations as the 
  // number to calculate the factorial. So we start with result = 1,
  // for each iteration, the previous result will be multiplied for
  // the operation number (that is alwasys increased by 1), so we get
  // the factorial calculation.
  const factorial = (number, operations = 0, result = 1) => {
    if (operations == number) return result; // if number operations == numbers, calculation is finished
    operations++;
    result = result * operations;
    return factorial(number, operations, result);
  };

  return factorial(number);
};

module.exports = calculateFactorial;
