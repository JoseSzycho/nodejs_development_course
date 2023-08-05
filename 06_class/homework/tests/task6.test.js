const { deepCloneObject } = require("../tasks/task6/deepCloneObject");

test("Expect clone object without nested objects to be the same", () => {
  const testObj = {
    a: 4,
    b: 5,
  };

  const newObj = deepCloneObject(testObj);
  expect(newObj).toEqual(testObj);
});

test("Expect clone with nested objects to be the same", () => {
  const testObj = {
    a: 4,
    b: 5,
    c: { ca: 43, cb: 25 },
  };

  const newObj = deepCloneObject(testObj);
  expect(newObj).toEqual(testObj);
});

test("Expect clone of object with complex nested structure to be equal to original one.", () => {
  const testObj = {
    a: 4,
    b: 5,
    c: {
      ca: 43,
      cb: 25,
      cc: { cca: 1, ccb: 2, ccd: { ccda: [1, 2, 3] } },
      cd: 1,
    },
    d: "hi",
    h: [
      1,
      2,
      3,
      4,
      {
        ca: [
          1,
          2,
          ,
          4,
          {
            a: 1,
            b: 5,
            c: [1, 2, [1, 2, 4, { a: 5, c: 25, d: [1, 2, 3] }], 4],
          },
        ],
        cb: 25,
        cc: {
          cca: 1,
          ccb: 2,
          ccd: {
            ccda: [
              1,
              [
                1,
                2,
                3,
                4,
                {
                  ca: [1, 2, , 4],
                  cb: 25,
                  cc: { cca: 1, ccb: 2, ccd: { ccda: [1, 2, 3] } },
                  cd: 1,
                },
              ],
              3,
            ],
          },
        },
        cd: 1,
      },
    ],
  };

  newObj = deepCloneObject(testObj);
  expect(newObj).toEqual(testObj);
});

test("Expect cloned object property values to not change after changes in original object", () => {
  let testObj = {
    a: [1, 2, 3],
    b: { a: 1, b: 3, c: 5 },
    c: "hi",
  };

  const newObj = deepCloneObject(testObj);

  testObj.a = "123";
  testObj.b = [1, 2, 3];
  delete testObj.c;

  expect(newObj).toEqual({
    a: [1, 2, 3],
    b: { a: 1, b: 3, c: 5 },
    c: "hi",
  });
});
