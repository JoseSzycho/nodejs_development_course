const { myJSONParse } = require("../myJSONParse");

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
