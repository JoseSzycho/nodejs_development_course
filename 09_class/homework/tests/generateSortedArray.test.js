const { generateSortedArray } = require("../utils/generateSortedArray");

test("Expect error if order or length are not valid inptus", () => {
    // Error if not valid order
    expect(() => generateSortedArray(5, "rand")).toThrow("Not a valid sorting order.");
    // Error if not valid length
    expect(() => generateSortedArray("a", "ascending")).toThrow("Not a valid length.");
    expect(() => generateSortedArray(NaN, "ascending")).toThrow("Not a valid length.");
    expect(() => generateSortedArray(-1, "ascending")).toThrow("Not a valid length.");
    expect(() => generateSortedArray("5", "ascending")).toThrow("Not a valid length.");
})

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
