const { JSONtokenization } = require("../JSONtokenization");

test("Expect stringified object to be equal", () => {
  const JSONString = JSON.stringify({
    nameKEY: "names",
    ageKEY: 25,
    numbersKEY: [1, { name: 2.5 }, -3, -4.5, -999.32, 331.211, 99],
    isMarriedKEY: false,
    numberOfChildKEY: null,
    textKEY: "more Text",
    petsKEY: ["John true", "false{},Snow"],
    moreInfoKEY: {
      lastNameKEY: "Last,Name",
      houseOwnerKEY: false,
      likeStudyingKEY: true,
      arrayKey: [1, [2], [[[3]]]],
    },
    stringKEY: "[im a string] a null true false{not a object} or ar,,ray",
  });

  expect(JSONtokenization(JSONString)).toEqual([
    "{",
    '"nameKEY"',
    ":",
    "names",
    ",",
    '"ageKEY"',
    ":",
    25,
    ",",
    '"numbersKEY"',
    ":",
    "[",
    1,
    ",",
    "{",
    '"name"',
    ":",
    2.5,
    "}",
    ",",
    -3,
    ",",
    -4.5,
    ",",
    -999.32,
    ",",
    331.211,
    ",",
    99,
    "]",
    ",",
    '"isMarriedKEY"',
    ":",
    false,
    ",",
    '"numberOfChildKEY"',
    ":",
    null,
    ",",
    '"textKEY"',
    ":",
    "more Text",
    ",",
    '"petsKEY"',
    ":",
    "[",
    "John true",
    ",",
    "false{},Snow",
    "]",
    ",",
    '"moreInfoKEY"',
    ":",
    "{",
    '"lastNameKEY"',
    ":",
    "Last,Name",
    ",",
    '"houseOwnerKEY"',
    ":",
    false,
    ",",
    '"likeStudyingKEY"',
    ":",
    true,
    ",",
    '"arrayKey"',
    ":",
    "[",
    1,
    ",",
    "[",
    2,
    "]",
    ",",
    "[",
    "[",
    "[",
    3,
    "]",
    "]",
    "]",
    "]",
    "}",
    ",",
    '"stringKEY"',
    ":",
    "[im a string] a null true false{not a object} or ar,,ray",
    "}",
  ]);
});

test("Expect stringified object to be equal", () => {
  const JSONString = JSON.stringify({
    name: ["jose,true", true, false, [1, 2, [3.5]]],
    age: 23,
    la: {
      name: "bob",
      age: 26,
    },
  });

  expect(JSONtokenization(JSONString)).toEqual([
    "{",
    '"name"',
    ":",
    "[",
    "jose,true",
    ",",
    true,
    ",",
    false,
    ",",
    "[",
    1,
    ",",
    2,
    ",",
    "[",
    3.5,
    "]",
    "]",
    "]",
    ",",
    '"age"',
    ":",
    23,
    ",",
    '"la"',
    ":",
    "{",
    '"name"',
    ":",
    "bob",
    ",",
    '"age"',
    ":",
    26,
    "}",
    "}",
  ]);
});

test("Expect stringified object to be equal", () => {
  const JSONstring = JSON.stringify([
    true,
    false,
    "name:",
    ":real",
    {
      age: 23,
      name: {
        lastName: "bob",
        otherObj: { age: 23 },
      },
    },
  ]);

  expect(JSONtokenization(JSONstring)).toEqual([
    "[",
    true,
    ",",
    false,
    ",",
    "name:",
    ",",
    ":real",
    ",",
    "{",
    '"age"',
    ":",
    23,
    ",",
    '"name"',
    ":",
    "{",
    '"lastName"',
    ":",
    "bob",
    ",",
    '"otherObj"',
    ":",
    "{",
    '"age"',
    ":",
    23,
    "}",
    "}",
    "}",
    "]",
  ]);
});
