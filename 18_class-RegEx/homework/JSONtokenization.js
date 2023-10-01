const { isValidToken } = require("./utils/isValidToken");

/**
 * Perform the tokenization of a structured JSON string.
 *
 * All primitive values are parsed into its correct data
 * type, even if the primitive is part of an object or array.
 *
 * To differentiate a key of a string, strings are inside "<...>" and
 * keys are inside '"<...>"'
 * @param {string} JSONstring The JSON string
 * @returns {array} The tokenized JSON string
 */
const JSONtokenization = (JSONstring) => {
  const checkToken = isValidToken();

  /* regEx explanation
    matching object keys    (?<key>"[a-zA-Z]+")(?=:) 
    matching boolean        (?<boolean>true|false)
    matching null           (?<null>null)
    matching array limits   (?<array>\[|\])
    matching obj limits     (\{|\})
    matching separators     (?<separator>:|,)
    matching string lazily  (?<string>".+?")
    matching numbers        (?<number>-?\d+\.?\d*)
  */

  // regex with named groups
  const regEx =
    /(?<object>\{|\})|(?<key>"[a-zA-Z]+")(?=:)|(?<string>".+?")|(?<separator>:|,)|(?<boolean>(true|false))|(?<number>-?\d+\.?\d*)|(?<array>\[|\])|(?<null>null)/g;

  let token;
  const tokens = [];

  // Tokenizing the JSON string
  while ((token = regEx.exec(JSONstring))) {
    checkToken(token);
    // Using named groups for parsing the primitive values
    if (token.groups.number) tokens.push(Number(token[0]));
    if (token.groups.boolean) tokens.push(token[0] === "true" ? true : false);
    if (token.groups.string) tokens.push(String(token[0].slice(1, -1)));
    if (token.groups.null) tokens.push(null);

    // Using named groups for completing tokenization
    if (token.groups.object) tokens.push(token[0]);
    if (token.groups.array) tokens.push(token[0]);
    if (token.groups.key) tokens.push(token[0]);
    if (token.groups.separator) tokens.push(token[0]);
  }

  checkToken(null, true);
  // tokenized JSON string
  return tokens;
};

module.exports = { JSONtokenization };
