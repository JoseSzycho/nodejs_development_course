const { isCallBackStyleFunction } = require("./utils/isCallBackStyleFunction");

/*Functions  that converts a callback-style function
 into a function that returns a promise*/
const promisify = (callbackStyleFunction) => {
  // Checking input
  isCallBackStyleFunction(callbackStyleFunction);

  // Returning new function that returns a promise
  return (value) => {
    // Returning new promise
    return new Promise((resolve, reject) => {
      /* Creating callback for settling  the
      callBackStyleFunction results*/
      const callback = (error, value) => {
        if (error === null) {
          resolve(value);
        } else {
          reject(new Error(error));
        }
      };

      // Evaluating callbackStyleFunction
      callbackStyleFunction(value, callback);
    });
  };
};

module.exports = { promisify };
