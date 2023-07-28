const getFullName = require("../task2/getFullName");

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
