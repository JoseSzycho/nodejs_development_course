const customShuffle = require("../tasks/task3/customShuffle");

test("Expect error if array argument is not a array", () => {
  const array = 1;
  expect(() => customShuffle(array)).toThrow("Expect a array.");
});

test("Expect tu return an array of same length", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const shuffledArray = customShuffle(array);

  expect(shuffledArray.length).toBe(array.length);
});

test("Expect tu return an array of same length", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    const shuffledArray = customShuffle(array);
  
    expect(shuffledArray.length).toBe(array.length);
  });

test("Expect to return a uniform randomness", () => {
  const array = [1, 100, 400, 600];
  const arrayAverage = array.reduce((acc, el) => acc + el, 0) / array.length;

  const arraySum = Array(array.length).fill(0);

  const iterations = 1000000;
  // Sum each element of arraySum the value of the same index element of the shuffledArray
  for (let i = 0; i < iterations; i++) {
    const shuffledArray = customShuffle(array);
    for (let j = 0; j < array.length; j++) arraySum[j] += shuffledArray[j];
  }

  // Calculates de average of each element.
  // Each element must be similar to the average of the array
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Average of array is: "${arrayAverage}" \n Average of element of arraySum "${i}" is "${
        arraySum[i] / iterations
      }"`
    );
  }

  /* There is uniform randomness
   It logs for a test run:
     Average of array is: "275.25" 
     Average of element of arraySum "0" is "275.208838"

     Average of array is: "275.25" 
     Average of element of arraySum "1" is "275.541794"

     Average of array is: "275.25" 
     Average of element of arraySum "2" is "275.084888"

     Average of array is: "275.25" 
     Average of element of arraySum "3" is "275.16448"

  */
});

