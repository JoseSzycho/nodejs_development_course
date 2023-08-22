const { generateRandomArray } = require("../utils/generateRandomArray");
const { mergeSort } = require("../utils/mergeSort");

test.skip("Expect arrays to be ordered", () => {
  // Performs a certain number of tests, in each test a random array will be generated
  // with the length of the current iteration of the for cycle.
  // Then we will compared our sort method with the sort method from js, and we expect
  // the results to be the same.
  const testsToPerfom = 500;

  for (let i = 1; i < testsToPerfom; i++) {
    const randomArray = generateRandomArray(i);
    const mergeSortedArray = mergeSort(randomArray);
    const jsSortedArray = randomArray.sort((a, b) => a - b);
    expect(mergeSortedArray).toEqual(jsSortedArray);
  }
});

test("Expect arrays to be ordered", () => {
  const array = [3,4,2,1,6,8,6,2];
  expect(mergeSort(array)).toEqual([1,2,2,3,4,6,6,8])
});

  
