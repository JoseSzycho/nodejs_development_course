const { generateRandomArray } = require("../utils/generateRandomArray");
const { quickSort } = require("../utils/quickSort");

test("Expect arrays to be ordered", () => {
  // Performs a certain number of tests, in each test a random array will be generated
  // with the length of the current iteration of the for cycle.
  // Then we will compared our sort method with the sort method from js, and we expect
  // the results to be the same.
  const testsToPerfom = 500;

  for (let i = 3; i < testsToPerfom; i++) {
    const randomArray = generateRandomArray(i);
    const quickSortedArray = quickSort(randomArray);
    const jsSortedArray = randomArray.sort((a, b) => a - b);
    expect(quickSortedArray).toEqual(jsSortedArray);
  }
});

