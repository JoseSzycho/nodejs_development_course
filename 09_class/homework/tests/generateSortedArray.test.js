const { generateSortedArray } = require("../utils/generateSortedArray");

test("Expect increasing sorted arrays to be created", () => {
  expect(generateSortedArray(0, "ascending")).toEqual([]);
  expect(generateSortedArray(1, "ascending")).toEqual([0]);
  expect(generateSortedArray(2, "ascending")).toEqual([0, 1]);
  expect(generateSortedArray(3, "ascending")).toEqual([0, 1, 2]);
});

test("Expect descending sorted arrays to be created", () => {
  expect(generateSortedArray(0, "descending")).toEqual([]);
  expect(generateSortedArray(1, "descending")).toEqual([0]);
  expect(generateSortedArray(2, "descending")).toEqual([1, 0]);
  expect(generateSortedArray(3, "descending")).toEqual([2, 1, 0]);
});
