const { isPromisesArray } = require("./utils/isPromiseArray");

// Function that mimics the behavior of Promise.all()
const promiseAll = (promises) => {
  // Checking for valid input data
  isPromisesArray(promises);

  // Returning new promise
  return new Promise((resolve, reject) => {
    // Stores each resolved promise of promises array
    const resolvedPromises = [];

    // Looping throw all promises of promises array
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          // If here, promise can ve resolved and we store result
          resolvedPromises.push(result);

          // If all promises where resolved
          if (resolvedPromises.length === promises.length)
            // Resolve result of promises array
            resolve(resolvedPromises);
        })
        .catch((error) => {
          // If here, promise cannot be resolved and it is rejected
          reject(error);
        });
    }
  });
};

module.exports = { promiseAll };
