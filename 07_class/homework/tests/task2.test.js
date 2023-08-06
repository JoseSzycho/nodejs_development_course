const chunkArray = require("../tasks/task2/chunkArray");

test("Expect error if array argument is not a array", () => {
  const array = 1;
  const chunkSize = 5;
  expect(() => chunkArray(array, chunkSize)).toThrow("Expect a array.");
});

test("Expect error if chunkSize argument is not a valid number", () => {
  const array = [1, 2, 3, 4];
  expect(() => chunkArray(array, 0)).toThrow(
    "Chunk size is not a valid number."
  );
  expect(() => chunkArray(array, -1)).toThrow(
    "Chunk size is not a valid number."
  );
  expect(() => chunkArray(array, "2")).toThrow(
    "Chunk size is not a valid number."
  );
  expect(() => chunkArray(array, NaN)).toThrow(
    "Chunk size is not a valid number."
  );
});

test("Expect to return same array inside othe array if chunck size >  array length", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkSize = 15;

  const chunkedArray = chunkArray(array, chunkSize);

  expect(chunkedArray).toEqual([[1, 2, 3, 4, 5, 6, 7, 8]]);
});

test("Expect to return same array inside othe array if chunck size =  array length", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkSize = array.length;

  const chunkedArray = chunkArray(array, chunkSize);

  expect(chunkedArray).toEqual([[1, 2, 3, 4, 5, 6, 7, 8]]);
});

test("Expect to chunkArray if array is multiple of chunk size", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkSize = 2;

  const chunkedArray = chunkArray(array, chunkSize);

  expect(chunkedArray).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]);
});

test("Expect to chunkArray if array is not multiple of chunk size", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 2;

  const chunkedArray = chunkArray(array, chunkSize);

  expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
});

test("Expect multiples test with different scenarios to pass", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  expect(chunkArray(array, 1)).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13]]);
  expect(chunkArray(array, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12],[ 13]]);
  expect(chunkArray(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13]]);
  expect(chunkArray(array, 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8],[ 9, 10, 11, 12], [13]]);
  expect(chunkArray(array, 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  expect(chunkArray(array, 6)).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13]]);
  expect(chunkArray(array, 7)).toEqual([[1, 2, 3, 4, 5, 6, 7],[ 8, 9, 10, 11, 12, 13]]);
  expect(chunkArray(array, 8)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13]]);
  expect(chunkArray(array, 9)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13]]);
  expect(chunkArray(array, 10)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13]]);
  expect(chunkArray(array, 11)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [12, 13]]);
  expect(chunkArray(array, 12)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [13]]);

});
