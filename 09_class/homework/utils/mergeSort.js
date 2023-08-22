// Merges sorted sub arrays and return and ordered array
const merge = (arrayLeftPart, arrayRigthPart) => {
  const sortedArray = []; // stores sorted array

  // In each iteration, we will compare the first value of both arrays,
  // the smallest value will be removed from its array and will be pushed into
  // the sortedArray
  while (arrayLeftPart.length > 0 && arrayRigthPart.length > 0) {
    // We iterate until one of the array gets empty
    if (arrayLeftPart[0] < arrayRigthPart[0]) {
      // If left array have the smallest value, we take it
      sortedArray.push(arrayLeftPart.shift());
    } else {
      // if right array have the smalest value, we take it
      sortedArray.push(arrayRigthPart.shift());
    }
  }

  // It can be the case where one of the arrays have some reminding
  // elements, as this elements are in order, we push them into
  // the sortedArray
  if (arrayLeftPart.length > 0) sortedArray.push(...arrayLeftPart);
  if (arrayRigthPart.length > 0) sortedArray.push(...arrayRigthPart);

  return sortedArray;
};

const mergeSort = (array) => {
  // If array length is 1, it is sorted and can be returned
  if (array.length === 1) return array; // recursion exit condition

  // else.. we divide the array into the left and right
  // part and apply the algorithm

  const arrayMiddlePosition = Math.trunc(array.length / 2); // calculating middle position
  const arrayLeftPart = array.slice(0, arrayMiddlePosition); // getting copy of left part of array
  const arrayRigthPart = array.slice(arrayMiddlePosition, array.length); // getting copy of right part of array
  return merge(mergeSort(arrayLeftPart), mergeSort(arrayRigthPart));
};

module.exports = { mergeSort };
