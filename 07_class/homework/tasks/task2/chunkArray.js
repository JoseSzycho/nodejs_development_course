// Task 1.2. It think this function is minimize memory usage as I do not
// create any new arrays during the chunk proces and there is not
// expeculation about creating an empty array for storing the chunks.
// chundkedArray grows up dinamically, this is memory efficient but not
// cpu efficient, as there might be cases where the chunkedArrey is copied
// to other memorie space in order to be able to grow up.

const isArray = (el) => Array.isArray(el); // returns true if el is an array
const isValidNumber = (el) => {
  // returns true if a valid number
  if (typeof el != "number") return false;
  if (el <= 0) return false;
  if (Number.isNaN(el)) return false;
  return true;
};

const chunkArray = (array, chunkSize) => {
  // checking for arguments type error
  if (!isArray(array)) throw new TypeError("Expect a array.");
  if (!isValidNumber(chunkSize))
    throw TypeError("Chunk size is not a valid number.");

  // Handling particular escenario
  if (chunkSize >= array.length) return [array];

  // i stores the start index of next chunk. It is not in
  // the scope of foor loop so can chunk the reminder when chunk size is not multiple of array length
  let i = chunkSize;
  let chunkedArray = []; // for storing array chunks

  for (i; i < array.length; i += chunkSize) {
    // increase i by chunkSize in every iteration so can slice the next array chunk
    chunkedArray.push(array.slice(i - chunkSize, i)); // slices from start of previous chunk to index i and stores it
  }

  // as there might be a reminder, we slice array from previous index to
  // the end of the array
  chunkedArray.push(array.slice(i - chunkSize));

  return chunkedArray;
};

module.exports = chunkArray;
