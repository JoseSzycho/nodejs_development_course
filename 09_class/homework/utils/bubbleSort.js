const bubbleSort = (unorderedArray) => {
  const array = [...unorderedArray]; // creating copy of unordered array

  // Flag for knowing if a swap was made
  let didASwap = false;

  // Iterating multiple times over the array to sort all elements
  for (let k = 0; k < array.length; k++) {
    didASwap = false;

    // Iterating over all array in pair of adjacent elements,
    // so the bigger element goes to the end of the array
    for (let i = 0; i < array.length - k - 1; i++) {
      // If the right element is smaller, we change swap elements
      if (array[i] > array[i + 1]) {
        // swaping elements
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        didASwap = true;
      }
    }

    // If no swap was made, array is ordered and we can stop the cycle
    if (didASwap === false) break;
  }

  return array;
};

module.exports = { bubbleSort };
