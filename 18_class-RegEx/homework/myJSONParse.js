const { JSONtokenization } = require("./JSONtokenization");

const myJSONParse = (JSONString) => {
  // Used for the constructing the parsed JSON
  let parsedJSON;
  // Stores next token to parse
  let token;
  /* Stores the actual state of the parsedJSON,
    <"array">  indicates we are in a array, so primitive must be pushed
    <"object"> indicates we are in a object, so primitive is added after a key 
  */
  let inArrayOrObject = false;
  // Stores actual position of parsedJSON for handling nested objects
  let stack = [];
  // Tokenized JSON String to process and parse
  const tokenizedString = JSONtokenization(JSONString);

  // If length === 1, there is a primitive data type
  if (tokenizedString.length === 1) return tokenizedString[0];

  // Analyzing first token
  token = tokenizedString.shift();
  if (token === "{") {
    parsedJSON = {};
    inArrayOrObject = "object";
  }
  if (token === "[") {
    parsedJSON = [];
    inArrayOrObject = "array";
  }

  while (tokenizedString.length > 0) {
    
    token = tokenizedString.shift();

    switch (token) {
      case "{":
        break;
      case "[":
        if (inArrayOrObject === "array") {
          parsedJSON.push([]);
          stack.push(parsedJSON);
          parsedJSON = parsedJSON[parsedJSON.length - 1];
        }
        break;
      case ",":
        break;
      case ":":
        break;
      case "}":
        break;
      case "]":
        if (inArrayOrObject === "array" && stack.length > 0) {
          parsedJSON = stack.pop();
        }
        break;
      default:
        if (inArrayOrObject === "array") parsedJSON.push(token);
        break;
    }
  }

  return parsedJSON;
};

module.exports = { myJSONParse };
