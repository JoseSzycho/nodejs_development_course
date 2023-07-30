const power = (base, exponent) => {
  // These error handling is outside calculatePower() for not evaluating them
  // all the time in valid escenarios
  if (exponent < 0) throw new Error("Exponent cannot be negative.");
  if (!Number.isInteger(exponent)) throw new Error("Exponent must be integer.");
  if (base == 0 && exponent == 0) throw new Error("Indeterminate result.");
  if (exponent == 0) return 1;

  // There are going to be as many operations as the exponent number.
  // So in each iteration, we multiply the previous result by the base
  // number. As result, the result number will be multiplied by the base
  // number as much times as the exponent indicates
  const calculatePower = (base, exponent, result = 1, operations = 0) => {
    if (operations == exponent) return result;
    operations++;
    result = result * base;
    return calculatePower(base, exponent, result, operations);
  };

  return calculatePower(base, exponent);
};

module.exports = power;
