const quickSort = (unsortedArray) => {
  const array = [...unsortedArray]; // crates copy of input array
  const leftArrayPart = []; // stores array elements that are less than pivot
  const rightArrayPart = []; // stores array elements that are major than pivot

  // If array is already sorted, we return it
  if (array.length == 0) return array; // Recursion exit condition

  // Settig pivot as and random element of array
  const randomIndex = Math.trunc(Math.random() * array.length);
  const arrayPivot = array.splice(randomIndex, 1)[0];

  // Iterating over all array and separate the array in left
  // and right part
  for (let i = 0; i < array.length; i++) {
    if (array[i] < arrayPivot) {
      // If array value is less than pivot, stores value
      // to the left part
      leftArrayPart.push(array[i]);
    } else {
      // Store array value to the right part
      rightArrayPart.push(array[i]);
    }
  }

  return [
    ...quickSort(leftArrayPart),
    arrayPivot,
    ...quickSort(rightArrayPart),
  ];
};

module.exports = { quickSort };
