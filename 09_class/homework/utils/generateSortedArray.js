const generateSortedArray = (length, order) => {
  // Checking for invalid inputs
  if (!["ascending", "descending"].includes(order)) {
    throw new Error("Not a valid sorting order.");
  }
  if (typeof length != "number" || length < 0 || Number.isNaN(length)) {
    throw new Error("Not a valid length.");
  }

  // Create empty arry filled to avoid holy elements,
  // and optimize cpu performance
  const array = Array(length).fill(0);

  if (order === "ascending") {
    // Fill array with ascending values
    for (let i = 0; i < length; i++) {
      array[i] = i;
    }
  }

  if (order === "descending") {
    // Fill array with descending values
    for (let i = length - 1; i >= 0; i--) {
      array[length - i - 1] = i;
    }
  }

  return [...array]; // returns elements, not reference
};

module.exports = { generateSortedArray };
