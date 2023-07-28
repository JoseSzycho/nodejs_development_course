const getFullName = require("../task2/getFullName");
const filterUniqueWords = require("../task2/filterUniqueWords");

describe("getFullName function tests", () => {
  test('Expect {firstName: Homero, lastName: Simpson} to be "Homero Simpson"', () => {
    const person = {
      firstName: "Homero",
      lastName: "Simpson",
    };

    expect(getFullName(person)).toBe("Homero Simpson");
  });

  test('Expect {firstName: Juan jOsE, lastName: SzyChowski szYcHOWski} to be "Juan Jose Szychowski Szychowski"', () => {
    const person = {
      firstName: "Juan jOsE",
      lastName: "SzyChowski szYcHOWski",
    };

    expect(getFullName(person)).toBe("Juan Jose Szychowski Szychowski");
  });

  test('Expect function call to not modify person object', () => {
    const person = {
      firstName: "Homero",
      lastName: "Simpson",
    };
    const fullName = getFullName(person);
    expect(person).toEqual({
        firstName: "Homero",
        lastName: "Simpson",
      });
  });
  

});

describe("fulterUniqueWords tests", () => {
  test('Expect "hi" to be ["hi"]', () => {
    const text = "hi";
    const uniqueWords = filterUniqueWords(text);
    expect(uniqueWords).toEqual(["hi"]);
  });

  test('Expect "hi bye" to be ["bye", "hi"]', () => {
    const text = "hi bye";
    const uniqueWords = filterUniqueWords(text);
    expect(uniqueWords).toEqual(["bye", "hi"]);
  });

  test('Expect "hi bye hi HI bYe bye tree CaR" to be ["bye", "car", "hi", "tree"]', () => {
    const text = "hi bye hi HI bYe bye tree CaR";
    const uniqueWords = filterUniqueWords(text);
    expect(uniqueWords).toEqual(["bye", "car", "hi", "tree"]);
  });

});