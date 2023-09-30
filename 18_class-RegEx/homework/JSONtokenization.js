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

  let match;
  const tokens = [];

  // Tokenizing the JSON string
  while ((match = regEx.exec(JSONstring))) {
    // Using named groups for parsing the primitive values
    if (match.groups.number) tokens.push(Number(match[0]));
    if (match.groups.boolean)
      tokens.push(match[0] === "true" ? true : false);
    if (match.groups.string) tokens.push(String(match[0].slice(1,-1)));
    if (match.groups.null) tokens.push(null);

    // Using named groups for completing tokenization
    if (match.groups.object) tokens.push(match[0]);
    if (match.groups.array) tokens.push(match[0]);
    if (match.groups.key) tokens.push(match[0]);
    if (match.groups.separator) tokens.push(match[0]);
  }

  // tokenized JSON string
  return tokens;
};

module.exports = { JSONtokenization };