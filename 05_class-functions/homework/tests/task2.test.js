const getFullName = require("../task2/getFullName");
const filterUniqueWords = require("../task2/filterUniqueWords");
const getAverageGrade = require("../task2/getAverageGrade");

describe("getFullName function tests", () => {
  test("Expect error if a string is not sent.", () => {
    const person = {
      firstName: "Homero",
      lastName: 1,
    };
    expect(() => getFullName(person)).toThrow(
      "Cannot operate if input is not a string."
    );
  });
  
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

  test("Expect function call to not modify person object", () => {
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

describe("filterUniqueWords function tests", () => {
  test("Expect error if a string is not sent.", () => {
    const text = [1, 3];
    expect(() => filterUniqueWords(text)).toThrow(
      "Cannot filter if text it is not a string."
    );
  });

  test("Expect error if a string is not sent.", () => {
    const text = ["hello world !"];
    expect(() => filterUniqueWords(text)).toThrow(
      "Cannot filter if text it is not a string."
    );
  });

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

describe("getAverageGrade function tests", () => {
  test("Expect error if a grade is not in the valid range.", () => {
    const student1 = {
      name: "Bart",
      grades: [7, 7, 7, 7],
    };

    const student2 = {
      name: "Lisa",
      grades: [9, -1, 9, 9],
    };

    const students = [student1, student2];

    expect(() => getAverageGrade(students)).toThrow(
      "Grade must be in the range of 0 - 10."
    );
  });

  test("Expect average to be 8", () => {
    const student1 = {
      name: "Bart",
      grades: [7, 7, 7, 7],
    };

    const student2 = {
      name: "Lisa",
      grades: [9, 9, 9, 9],
    };

    const students = [student1, student2];
    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBe(8);
  });

  test("Expect average to be 8", () => {
    const student1 = {
      name: "Bart",
      grades: [7],
    };

    const student2 = {
      name: "Lisa",
      grades: [9],
    };

    const students = [student1, student2];
    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBe(8);
  });

  test("Expect average to be 6.25", () => {
    const student1 = {
      name: "Bart",
      grades: [7, 5, 4],
    };

    const student2 = {
      name: "Lisa",
      grades: [6],
    };

    const student3 = {
      name: "Marge",
      grades: [9, 9, 5, 5],
    };

    const students = [student1, student2, student3];
    const averageGrade = getAverageGrade(students);

    expect(averageGrade).toBe(6.25);
  });

  test("Expect stundent array to not change after function call.", () => {
    const student1 = {
      name: "Bart",
      grades: [7, 5, 4],
    };

    const student2 = {
      name: "Lisa",
      grades: [3, 4, 2],
    };

    const students = [student1, student2];
    const averageGrade = getAverageGrade(students);

    expect(students).toEqual([
      {
        name: "Bart",
        grades: [7, 5, 4],
      },
      {
        name: "Lisa",
        grades: [3, 4, 2],
      },
    ]);
  });
});
