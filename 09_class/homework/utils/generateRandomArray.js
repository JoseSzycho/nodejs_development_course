// Returns a randum number between 0 and el
const randomNumber = (el) => Math.floor(Math.random() * el);

// Generates a random array of with a certaing length
// with values between 0 and length value
const generateRandomArray = (length) => {
  // Creating array with given length, filled with 0
  // to avoid holy element.
  const randomArray = Array(length).fill(0);

  for (let i = 0; i < randomArray.length; i++) {
    // Filling up array with random numbers
    randomArray[i] = randomNumber(randomArray.length);
  }

  return randomArray;
};

module.exports = { generateRandomArray };
