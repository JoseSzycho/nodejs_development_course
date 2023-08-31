const { isFunctionsPromiseArray } = require("./utils/isFunctionsPromiseArray");

// function that facilitates chaining of promises
async function chainPromises(functionsArray) {
  // Input check
  isFunctionsPromiseArray(functionsArray);

  // Store previous promises data
  let previousData;

  // Looping through all promises functions
  for (let i = 0; i < functionsArray.length; i++) {
    // Storing a promise function
    const promiseFunction = functionsArray[i];

    try {
      // Storing each return value of each promise function in
      // a secencial way
      previousData = await promiseFunction(previousData);
    } catch (error) {
      // If rejected return, reject promise function
      return Promise.reject(error);
    }
  }

  // If here, all promise function have been resolved and
  // we can return the chain resolution
  return Promise.resolve(previousData);
}

module.exports = { chainPromises };
