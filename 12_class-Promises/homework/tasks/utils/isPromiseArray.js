// Checks if an input array is filled with promises
const isPromisesArray = (promises) => {
  // If promises is not a array
  if (!Array.isArray(promises))
    throw new Error("Ony accepts array of promises.");

  // Looping throw all promises elements
  promises.forEach((el) => {
    // If el it is not a promise
    if (!(el && typeof el.then === "function"))
      throw new Error("Ony accepts array of promises.");
  });
}

module.exports = { isPromisesArray };
