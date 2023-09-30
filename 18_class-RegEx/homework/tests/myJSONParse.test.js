const { myJSONParse } = require("../myJSONParse");

describe("Array tests", () => {
  test("Expect array to be parsed", () => {
    const array = [1, 2, 3, "name", null, false, true];
    expect(myJSONParse(JSON.stringify(array))).toEqual(array);
  });

  test("Expect nested array to be parsed", () => {
    const array = [
      1,
      [2],
      [[3, 4, 5]],
      "name",
      [1, 2, [3, 5, [5, 6]]],
      false,
      true,
    ];

    expect(myJSONParse(JSON.stringify(array))).toEqual(array);
  });
});

describe("Object tests", () => {
  test("Expect object to be parsed", () => {
    const obj = {
      name: "Jose",
      numberOfFingers: 20,
      havePet: true,
      isNull: null,
    };

    expect(myJSONParse(JSON.stringify(obj))).toEqual(obj);
  });

  test("Expect nested object to be parsed", () => {
    const obj = {
      name: {
        lastName: "Juan",
      },
      numberOfFingers: 20,
      havePet: true,
      moreObj: {
        objA: 54,
        objB: {
          a: {
            b: {
              c: 54,
              d: {
                e: "jose",
                f: null,
                c: false,
              },
              f: "hope it works",
            },
          },
        },
      },
      isNull: null,
    };

    expect(myJSONParse(JSON.stringify(obj))).toEqual(obj);
  });
});

describe("Testing combination of nested array and objects", () => {
  test("Expect object with nested arrays to be parsed", () => {
    const obj = {
      name: "jose",
      nestObj: {
        a: 4,
        b: 3,
      },
      numbers: [1, 2, 3, 4, [1, 2, 3, 4, [1]]],
      end: true,
      finish: [[[[4]]], [2, [5]]],
    };
    expect(myJSONParse(JSON.stringify(obj))).toEqual(obj);
  });
  test("Expect array with nested objects to be parsed", () => {
    const arr = [
      1,
      2,
      {
        name: "Jose",
        lastName: { a: 4, b: 4, continue: true, otherObj: { a: 1, b: 3 } },
      },
    ];

    expect(myJSONParse(JSON.stringify(arr))).toEqual(arr);
  });
});
