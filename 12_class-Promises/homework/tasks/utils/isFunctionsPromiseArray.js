const isFunctionsPromiseArray = (functionsArray) => {
  // If promises is not a array
  if (!Array.isArray(functionsArray))
    throw new Error("Only accepts array of function promises.");
};

module.exports = { isFunctionsPromiseArray };
