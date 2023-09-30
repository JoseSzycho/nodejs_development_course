const { JSONtokenization } = require("./JSONtokenization");
/** Parses a JSON string, constructing the JavaScript value or object described by the string.
 *
 * It works by tokenizing the JSON string, after that, it implements an algorithm
 * that process each token in order to decide if the token is a value to add,
 * if is a the aperture of an array or object, or if it is the closing of
 * an array or object.
 *
 * @param {String} JSONString The string
 * @returns {any} The parsed value or object
 */
const myJSONParse = (JSONString) => {
  // Used for the constructing the parsed JSON
  let parsedJSON;
  // Stores next token to parse
  let token;
  // Stores actual position of parsedJSON for handling nested objects
  let objectStack = [];
  // Store actual state of parsedJSON, in order to know if we are
  // into a object or into an array
  let stateStack = [];
  // Actual object key
  let key;
  // Tokenized JSON String to process and parse
  const tokenizedString = JSONtokenization(JSONString);

  // If length === 1, there is a primitive data type
  if (tokenizedString.length === 1) return tokenizedString[0];

  // Analyzing first token, in order to know if we
  // start from a object or a array
  token = tokenizedString.shift();
  if (token === "{") {
    parsedJSON = {};
    stateStack.push("object");
  }
  if (token === "[") {
    parsedJSON = [];
    stateStack.push("array");
  }

  // Parsing elements till all elements are parsed
  while (tokenizedString.length > 0) {
    // Getting token
    token = tokenizedString.shift();

    switch (token) {
      case ",": // ignore, skip to next cycle
      case ":": // ignore, skip to next cycle
        break;
      case "{": // Adding a nested object
        // If we are into a array
        if (stateStack[stateStack.length - 1] === "array") {
          parsedJSON.push({}); //
          objectStack.push(parsedJSON); // storing actual position
          stateStack.push("object"); // storing actual state
          parsedJSON = parsedJSON[parsedJSON.length - 1];
          break;
        }

        // If we are into a object
        if (stateStack[stateStack.length - 1] === "object") {
          parsedJSON[key] = {};
          objectStack.push(parsedJSON); // storing actual position
          stateStack.push("object"); // storing actual state
          parsedJSON = parsedJSON[key];
          break;
        }

      case "[": // Adding a nested array
        // If we are into an array
        if (stateStack[stateStack.length - 1] === "array") {
          parsedJSON.push([]);
          objectStack.push(parsedJSON); // storing actual position
          stateStack.push("array"); // storing actual state
          parsedJSON = parsedJSON[parsedJSON.length - 1];
          break;
        }

        // If we are into a object
        if (stateStack[stateStack.length - 1] === "object") {
          parsedJSON[key] = [];
          objectStack.push(parsedJSON); // storing actual position
          stateStack.push("array"); // storing actual state
          parsedJSON = parsedJSON[key];
          break;
        }

      case "}": // jumping outside a nested object
      case "]": // jumping outside a nested array
        if (objectStack.length > 0) {
          parsedJSON = objectStack.pop(); // obtaining last parsedJSON position
          stateStack.pop(); // obtaining past parsedJSON state
        }
        break;
      default: // If here, we have a key or a value to add
        // Checking if we should get a key
        if (tokenizedString[0] === ":") {
          key = token.slice(1, -1); // '"key"' converts into "key"
          continue; // Skips to nex cycle
        }

        // If we are into an object, add value by key
        if (stateStack[stateStack.length - 1] === "object")
          parsedJSON[key] = token;

        // If we are into an array, push value
        if (stateStack[stateStack.length - 1] === "array")
          parsedJSON.push(token);
        break;
    }
  }
  return parsedJSON;
};

module.exports = { myJSONParse };
