/**
 * Higher Order Function sed by `../JSONtokenization.js` for determining
 * if a token is valid or not. If it is not valid, throws an error showing
 * the description of the error.
 * @param {Any} token
 * @returns
 */
const isValidToken = (token) => {
  // Store the tokens in order to access to a previous one
  let tokens = [];
  // Used for determining if nested objects are well created
  let bracesBalanceCount = 0;
  let bracketsBalanceCount = 0;

  // Function that looks for indentation errors
  const checkIndentations = () => {
    if (bracesBalanceCount > 0) throw new Error('Missing "}"');
    if (bracesBalanceCount < 0) throw new Error('Missing "{"');
    if (bracketsBalanceCount > 0) throw new Error('Missing "]"');
    if (bracketsBalanceCount < 0) throw new Error('Missing "["');
  };

  // Function that checks if is a valid single value in the case
  // the JSON string do not have any array or object.
  const checkForSingleValue = () => {
    if (tokens.length === 0) throw new Error("Expected JSON input.");
    if (tokens.length === 1) {
      if (
        !(
          tokens[0].groups.number ||
          tokens[0].groups.boolean ||
          tokens[0].groups.string ||
          tokens[0].groups.null
        )
      ) {
        throw new Error("Expected JSON input.");
      }
    }
  };

  // Checks if the key or property name is correct
  const checkKeyPosition = (previousToken) => {
    if (!(previousToken[0] === "," || previousToken[0] === "{"))
      throw new Error(`Invalid key position at index ${previousToken.index}`);
  };

  // Checks if the position of "," or ":" is correct
  const checkSeparatorPosition = (token, previousToken) => {
    if (token[0] === ":" && previousToken.groups.key === undefined) {
      throw new Error(`Invalid key at position ${previousToken.index}`);
    }
    if (token[0] === ",") {
      if (
        !(
          previousToken.groups.number ||
          previousToken.groups.boolean ||
          previousToken.groups.string ||
          previousToken.groups.null ||
          previousToken[0] === "]" ||
          previousToken[0] === "}"
        )
      ) {
        throw new Error(`Invalid "," at position ${token.index}`);
      }
    }
  };

  // Checks if a value is in correct position
  const checkValuePosition = (previousToken) => {
    if (!(previousToken.groups.separator || previousToken[0] === "[")) {
      throw new Error(`Invalid value at position ${previousToken.index + 1}`);
    }
  };

  // Checks if "{ or } or [ or ]" positions are correct
  const checkObjectPosition = (token, previousToken) => {
    if (token[0] === "{" || token[0] === "[") {
      if (
        !(
          previousToken[0] === "," ||
          previousToken[0] === ":" ||
          previousToken[0] === "[" ||
          previousToken[0] === undefined
        )
      ) {
        console.log(previousToken[0]);
        throw new Error(`Invalid "{" at position ${token.index}`);
      }
    }
    if (token[0] === "}" || token[0] === "]") {
      if (
        !(
          previousToken.groups.number ||
          previousToken.groups.boolean ||
          previousToken.groups.string ||
          previousToken.groups.null ||
          previousToken[0] === "]" ||
          previousToken[0] === "}"
        )
      ) {
        throw new Error(`Invalid "}" at position ${token.index}`);
      }
    }
  };

  return (token, finalCheck = false) => {
    // If the tokenization process is finished, performs final tests
    if (finalCheck) {
      checkForSingleValue();
      checkIndentations();
      return;
    }

    // Storing token in order to analyze the previous ones
    tokens.push(token);

    // Storing indentation levels for final check
    if (token[0] === "{") bracesBalanceCount++;
    if (token[0] === "[") bracketsBalanceCount++;
    if (token[0] === "}") bracesBalanceCount--;
    if (token[0] === "]") bracketsBalanceCount--;

    // If there are no previous token
    if (tokens.length <= 1) return;

    const previousToken = tokens[tokens.length - 2];

    // Checking tokens that contains values
    if (
      token.groups.number ||
      token.groups.boolean ||
      token.groups.string ||
      token.groups.null
    ) {
      checkValuePosition(previousToken);
    }

    // Checking special tokens
    if (token.groups.key) checkKeyPosition(previousToken);
    if (token.groups.separator) checkSeparatorPosition(token, previousToken);
    if (token.groups.object || token.groups.array)
      checkObjectPosition(token, previousToken);
  };
};

module.exports = { isValidToken };
