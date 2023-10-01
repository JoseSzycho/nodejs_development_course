const isValidToken = (token) => {
  let tokens = [];
  let bracesBalanceCount = 0;
  let bracketsBalanceCount = 0;

  const checkIndentations = () => {
    if (bracesBalanceCount > 0) throw new Error('Missing "}"');
    if (bracesBalanceCount < 0) throw new Error('Missing "{"');
    if (bracketsBalanceCount > 0) throw new Error('Missing "]"');
    if (bracketsBalanceCount < 0) throw new Error('Missing "["');
  };

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

  const checkKeyPosition = (previousToken) => {
    if (!(previousToken[0] === "," || previousToken[0] === "{"))
      throw new Error(`Invalid key position at index ${previousToken.index}`);
  };

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

  const checkValuePosition = (previousToken) => {
    if (!(previousToken.groups.separator || previousToken[0] === "[")) {
      throw new Error(`Invalid value at position ${previousToken.index + 1}`);
    }
  };

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
    if (finalCheck) {
      checkForSingleValue();
      checkIndentations();
      return;
    }
    tokens.push(token);

    if (token[0] === "{") bracesBalanceCount++;
    if (token[0] === "[") bracketsBalanceCount++;
    if (token[0] === "}") bracesBalanceCount--;
    if (token[0] === "]") bracketsBalanceCount--;

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
