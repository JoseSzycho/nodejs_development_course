const power = (base, exponent) => {
  // These error handling is outside calculatePower() for not evaluating them
  // all the time in valid escenarios
  if (exponent < 0) throw new Error("Exponent cannot be negative.");
  if (base == 0 && exponent == 0) throw new Error("Indeterminate result.");
  if (exponent == 0) return 1;

  const calculatePower = (base, exponent, result = 1, operations = 0) => {
    if (operations == exponent) return result;
    operations++;
    result = result * base;
    return calculatePower(base, exponent, result, operations);
  };

  return calculatePower(base, exponent);
};

module.exports = power;
