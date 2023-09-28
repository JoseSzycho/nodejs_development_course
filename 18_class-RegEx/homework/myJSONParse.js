const { JSONtokenization } = require("./JSONtokenization");

const myJSONParse = (JSONString) => {
  // Used for the constructing the parsed JSON
  let parsedJSON;

  /* Stores the actual state of the parsedJSON,
    <"array">  indicates we are in a array, so primitive must be pushed
    <"object"> indicates we are in a object, so primitive is added after a key 
  */
  let inArrayOrObject = false;

  // Tokenized JSON String to process and parse
  const tokenizedString = JSONtokenization(JSONString);

  // If length === 1, there is a primitive data type
  if (tokenizedString.length === 1) return tokenizedString[0];

  let token;

  token = tokenizedString.shift();

  if (token === "{") {
    parsedJSON = {};
    inArrayOrObject = "object";
  }
  if (token === "[") {
    parsedJSON = [];
    inArrayOrObject = "array";
  }

  do {} while (tokenizedString.length > 0);
};
