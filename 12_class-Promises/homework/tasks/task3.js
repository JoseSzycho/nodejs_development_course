const { isFunctionsPromiseArray } = require("./utils/isFunctionsPromiseArray");

// function that facilitates chaining of promises
function chainPromises(functionsArray) {
  // Input check
  isFunctionsPromiseArray(functionsArray);

  // Getting first promise from promises function array
  let promiseChain = functionsArray.shift()();

  // Looping throw all remaining promises functions to chain them
  for (const promiseFunc of functionsArray) {
    // Adding next promises to the chain
    promiseChain = promiseChain.then((el) => promiseFunc(el));
  }

  // Returning the chaining of all the promises
  return promiseChain;
}

module.exports = { chainPromises };
