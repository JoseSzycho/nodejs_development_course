const calculateFactorial = (number) => {
  if (number < 0) return 1; // using this evaluation outside recursive fuction to not evaluate it in every run
  const factorial = (number, operations = 0, result = 1) => {
    if (operations == number) return result; // if number operations == numbers, calculation is finished
    operations++;
    result = result * operations;
    return factorial(number, operations, result);
  };

  return factorial(number);
};

module.exports = calculateFactorial;
