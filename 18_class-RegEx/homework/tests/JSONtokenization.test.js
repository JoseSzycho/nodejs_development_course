const { JSONtokenization } = require("../JSONtokenization");

describe("Testing positive scenarios", () => {
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
});

describe("Testing error scenarios", () => {
  test.skip("Expect indentation error", () => {
    expect(() => JSONtokenization("{{}")).toThrow('Missing "}"');
    expect(() => JSONtokenization("{}}")).toThrow('Missing "{"');
    expect(() => JSONtokenization("[][")).toThrow('Missing "]"');
    expect(() => JSONtokenization("][]")).toThrow('Missing "["');
  });

  test("Expect JSON input error.", () => {
    expect(() => JSONtokenization(":")).toThrow("Expected JSON input.");
    expect(() => JSONtokenization(",")).toThrow("Expected JSON input.");
    expect(() => JSONtokenization("[")).toThrow("Expected JSON input.");
    expect(() => JSONtokenization("}")).toThrow("Expected JSON input.");
    expect(() => JSONtokenization(".")).toThrow("Expected JSON input.");
  });

  test("Expect value position error", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street""123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow(
      "Invalid value at position 57"
    );
  });
  test("Expect key position error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"}"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow(
      "Invalid key position at index 111"
    );
  });
  test("Expect key position error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890",:"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow(
      "Invalid key at position 145"
    );
  });
  test("Expect error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow("Expected JSON input.");
  });
  test.skip("Expect error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow("Expected JSON input.");
  });
  test.skip("Expect error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow("Expected JSON input.");
  });
  test.skip("Expect error.", () => {
    const JSONString =
      '{"name":"John Doe","age":30,"isStudent":false,"address":{"street":"123 Main St","city":"town","zipCode":"12345"},"contact":{"phone":"+1234567890","email":"john.doe@example.com"},"hobbies":["reading","traveling","coding",["helicopters","planes"]],"education":{"degree":"Bachelors in Computer Science","school":{"name":"University XYZ","location":"City"}},"friends":[{"name":"Alice","age":28,"isStudent":true},{"name":"Bob","age":32,"isStudent":false}],"nullValue":null,"specialCharacters":"!@#$%^&*()_+"}';
    expect(() => JSONtokenization(JSONString)).toThrow("Expected JSON input.");
  });
});
