const { isPromisesArray } = require("./utils/isPromiseArray");

/*function called promiseAllSettled that mimics the 
behavior of Promise.allSettled()*/
const promiseAllSettled = (promises) => {
  // Input data validation
  isPromisesArray(promises);

  // Returning new Promise
  return new Promise((resolve, reject) => {
    // Stores each settled promise of promises array
    const settledPromises = [];

    // Looping throw all promises of promises array
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          // If the promise is resolved, we store its properties
          settledPromises[i] = { status: "fulfilled", value: result };

          // If all promises are settled, we resolve them
          if (settledPromises.length === promises.length)
            resolve(settledPromises);
        })
        .catch((error) => {
          // If the promise is rejected, we store its properties
          settledPromises[i] = { status: "rejected", reason: error };

          // If all promises are settled, we resolve them
          if (settledPromises.length === promises.length)
            resolve(settledPromises);
        });
    }
  });
};

module.exports = { promiseAllSettled };
