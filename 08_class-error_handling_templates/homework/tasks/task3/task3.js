//// IMPORTANT ACLARATION /////
///// In order to mantain identation, argument to the
///// tagged template function must be sent as an expression.
///// Other way, there is no method to preserve the spaces and
///// identations, as tagged template eliminates identations when
///// receives an string templete that have identations with a length
///// of more than one space.
/////
///// Use example:
///// multiline`${`
///// CODE TO CONVERT TO MULTILINE HERE`
///// }`

// Check for error
const errorIfNotString = (el) => {
  // Checking if an array
  if (typeof el != "string") throw new TypeError("Input must be a string.");
};

// Add line number
const addLineNumber = () => {
  let counter = 1;

  return (el) => {
    return el.replaceAll("\n", () => `\n${counter++} `);
  };
};

// Accepts and expression inside a tagged template and returns the expression
// numering each line
const multiline = (str, code) => {
  // Checking for input errors
  errorIfNotString(code);

  const newLine = "\n";
  const addNumberToLine = addLineNumber();

  // Separating string by space, so we can keep identation
  const spaceSeparatedCode = code.split(" ");

  // Adding line numering to string
  const lineNumeredCode = spaceSeparatedCode.map((el) => {
    if (el.includes(newLine)) {
      // If the element includes a new line
      return addNumberToLine(el); // Add line number to the element
    }
    return el; // If it does not include, do nothing
  });

  return lineNumeredCode.join(" ");
};

module.exports = multiline;
