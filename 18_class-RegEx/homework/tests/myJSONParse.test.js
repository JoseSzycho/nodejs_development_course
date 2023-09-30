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

    console.log(myJSONParse(JSON.stringify(obj)));
    expect(myJSONParse(JSON.stringify(obj))).toEqual(obj);
  });
});
