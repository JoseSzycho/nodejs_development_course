const { JSONtokenization } = require("./JSONtokenization");

const myJSONParse = (JSONString) => {
  // Used for the constructing the parsed JSON
  let parsedJSON;
  // Stores next token to parse
  let token;

  // Stores actual position of parsedJSON for handling nested objects
  let objectStack = [];
  // Store actual state of parsedJSON, if we are inside a object or array
  let stateStack = [];
  // Actual object key;
  let key;
  // Tokenized JSON String to process and parse
  const tokenizedString = JSONtokenization(JSONString);

  // If length === 1, there is a primitive data type
  if (tokenizedString.length === 1) return tokenizedString[0];

  // Analyzing first token
  token = tokenizedString.shift();
  if (token === "{") {
    parsedJSON = {};
    stateStack.push("object");
  }
  if (token === "[") {
    parsedJSON = [];
    stateStack.push("array");
  }

  while (tokenizedString.length > 0) {
    console.log(stateStack);
    token = tokenizedString.shift();

    switch (token) {
      case "{":
        if (stateStack[stateStack.length - 1] === "object") {
          parsedJSON[key] = {};
          objectStack.push(parsedJSON);
          stateStack.push(stateStack[stateStack.length - 1]);
          parsedJSON = parsedJSON[key];
        }
        break;
      case "[":
        if (stateStack[stateStack.length - 1] === "array") {
          parsedJSON.push([]);
          objectStack.push(parsedJSON);
          stateStack.push(stateStack[stateStack.length - 1]);
          parsedJSON = parsedJSON[parsedJSON.length - 1];
        }
        break;
      case ",":
        break;
      case ":":
        break;
      case "}":
        if (
          stateStack[stateStack.length - 1] === "object" &&
          objectStack.length > 0
        ) {
          parsedJSON = objectStack.pop();
          stateStack.pop();
        }
        break;
      case "]":
        if (
          stateStack[stateStack.length - 1] === "array" &&
          objectStack.length > 0
        ) {
          parsedJSON = objectStack.pop();
          stateStack.pop();
        }
        break;
      default:
        // If it a key
        if (tokenizedString[0] === ":") {
          // Skips to nex cycle
          key = token.slice(1, -1);
          continue;
        }

        if (stateStack[stateStack.length - 1] === "object")
          parsedJSON[key] = token;

        if (stateStack[stateStack.length - 1] === "array")
          parsedJSON.push(token);
        break;
    }
  }

  return parsedJSON;
};

module.exports = { myJSONParse };
