// Task 1.2. It is said to implement an efficient shuffling algorithm.
// Searching in internet, it seems the algorithm I knew is very similar to
// Fisher-Yates algortihm. The difference is that Fisher-Yates algorithms
// swaps the arrays element from backward to front, and it does not swap
// the visited elements more than one time.
// The algorithm here goes from front to back and it does swap an element
// more than one tieme if the escenario is met. 
// Fisher-Yates is more efficient, as the random generated number is
// smaller in every step.

const { deepCloneObject } = require("./utils"); // From previous homework
const isArray = (el) => Array.isArray(el); // returns true if el is an array
const getRandomIndex = (maxIndex) => Math.floor(Math.random() * maxIndex); // returns a random number with a top limit

const customShuffle = (array) => {
  // Input checking
  if (!isArray(array)) throw new TypeError("Expect a array.");

  const shuffledArray = deepCloneObject(array); // Deepcloning array
  const maxRandomIndex = shuffledArray.length; // Getting max index value

  for (let i = 0 ; i < array.length; i++) {
    const randomIndex = getRandomIndex(i+1);
    // Changing array elements in random order
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }
 
  return shuffledArray;
};

module.exports = customShuffle;
