const { deepCloneObject } = require("./task");

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
    a: { ca: { ca: 43, cb: 25 }, cb: 25 },
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
      cc: {
        cca: 1,
        ccb: 2,
        ccc: { a: 4, b: [1, 2, 3, 4] },
        g: { a: 3, b: 8, c: [1, 2, 3, {a: 43, b: 35, c: [1, 2, 3]}, 5] },
      },
      cd: 1,
    },
    d: "hi",
    e: [1, 2, 3, 4],
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

  testObj.a[0] = 2;
  testObj.b = [1, 2, 3];
  delete testObj.c;

  expect(newObj).toEqual({
    a: [1, 2, 3],
    b: { a: 1, b: 3, c: 5 },
    c: "hi",
  });
});


test("Expect circular reference to throw error", () => {
  const testObj = {
    a: 1,
    b: 2,
    c: [3, 4],
  };

  testObj.c[1] = testObj;

  expect(() => deepCloneObject(testObj)).toThrow(
    "Circular referecernce detected."
  );
});
