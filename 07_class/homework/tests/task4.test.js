const getArrayIntersection = require("../tasks/task4/getArrayIntersection");
const getArrayUnion = require("../tasks/task4/getArrayUnion");

describe("getArrayIntersection function tests", () => {
  test("Expect error if argument is not an array", () => {
    expect(() => getArrayIntersection([1, 2, 3], 4)).toThrow("Expect a array.");
    expect(() => getArrayIntersection(4, [1, 2, 3])).toThrow("Expect a array.");
  });

  test("Expect error if there is an object in the array", () => {
    expect(() => getArrayIntersection([1, 2, 3], [1, 2, 3, { a: 5 }])).toThrow(
      "Cannot compare object data type."
    );
    expect(() => getArrayIntersection([1, 2, 3, [1]], [1, 2, 3])).toThrow(
      "Cannot compare object data type."
    );
  });

  test("Expect to get array intersection ", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [4, 2];

    const intersectionArray = getArrayIntersection(array1, array2);

    expect(intersectionArray).toEqual([2, 4]);
  });

  test("Expect to get array intersection ", () => {
    const array1 = [1, 2, 3, 4, 4, "hola", "hola", 84];
    const array2 = [88, "chau", 4, 2, "hola", "hola"];

    const intersectionArray = getArrayIntersection(array1, array2);

    expect(intersectionArray).toEqual([2, 4, "hola"]);
  });
});

describe("getArrayUnion function test", () => {
  test("Expect error if argument is not an array", () => {
    expect(() => getArrayUnion([1, 2, 3], 4)).toThrow("Expect a array.");
    expect(() => getArrayUnion(4, [1, 2, 3])).toThrow("Expect a array.");
  });

  test("Expect error if there is an object in the array", () => {
    expect(() => getArrayUnion([1, 2, 3], [1, 2, 3, { a: 5 }])).toThrow(
      "Cannot compare object data type."
    );
    expect(() => getArrayUnion([1, 2, 3, [1]], [1, 2, 3])).toThrow(
      "Cannot compare object data type."
    );
  });

  test("Expect to get array union", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 5, 8, 9];

    const joinArray = getArrayUnion(array1, array2);

    expect(joinArray).toEqual([1, 2, 3, 4, 5, 8, 9]);
  });

  test("Expect to get array union", () => {
    const array1 = [1, 2, 3, 4, 5, "hello"];
    const array2 = ["bye", "hello", 5, 8, 9];

    const joinArray = getArrayUnion(array1, array2);

    expect(joinArray).toEqual([1, 2, 3, 4, 5, "hello", "bye", 8, 9]);
  });
});
