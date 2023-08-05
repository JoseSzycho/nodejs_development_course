const { validateObject } = require("../tasks/task7/validateObject");

test("Expect schema to match object", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string",
    location: {
      city: "string",
      country: "string",
    },
  };

  const newStudent = {
    firstName: "Jose",
    lastName: "Szychowski,",
    location: {
      city: "Posadas",
      country: "Argentina",
    },
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(true);
});

test("Expect schema to match object", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string",
    location: {
      city: "string",
      country: "string",
    },
    favouriteTeams: {
      sports: {
        footbal: "string",
        basketball: "string",
      },
      chess: {
        player1: "string",
        player2: "string",
      },
    },
    interests: ["string", "string"],
  };

  const newStudent = {
    location: {
      city: "Posadas",
      country: "Argentina",
    },
    lastName: "Szychowski,",
    firstName: "Jose",
    favouriteTeams: {
      chess: {
        player1: "Dmitri",
        player2: "Magnusen",
      },
      sports: {
        basketball: "Basket",
        footbal: "Inter Miami",
      },
    },
    interests: ["history", "science"],
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(true);
});

test("Expect different properties name to not match", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string,",
  };

  const newStudent = {
    firstName: "Jose",
    latName: "Szychowski,", //different property name
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(false);
});

test("Expect different properties length to not match", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string,",
    surName: "string,", // extra properrty
  };

  const newStudent = {
    firstName: "Jose",
    lastName: "Szychowski,",
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(false);
});

test("Expect different property type to not match", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string",
    location: {
      cit: "string", // different property name
      country: "string",
    },
  };

  const newStudent = {
    firstName: "Jose",
    lastName: "Szychowski,",
    location: {
      city: "Posadas",
      country: "Argentina",
    },
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(false);
});


test("Expect nested object with different proprerty name to not match", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string",
    location: {
      city: "string",
      country: "string",
    },
    favouriteTeams: {
      sports: {
        footbal: "string",
        basketball: "string",
      },
      chess: {
        player1: "string",
        player2: "string",
      },
    },
    interests: ["string", "string"],
  };

  const newStudent = {
    location: {
      city: "Posadas",
      country: "Argentina",
    },
    lastName: "Szychowski,",
    firstName: "Jose",
    favouriteTeams: {
      chess: {
        player1: "Dmitri",
        player2: "Magnusen",
      },
      sports: {
        golf: "Basket", // different property name
        footbal: "Inter Miami",
      },
    },
    interests: ["history", "Science"],
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(false);
});

test("Expect nested object with different proprerty type to not match", () => {
  const newStudentSchema = {
    firstName: "string",
    lastName: "string",
    location: {
      city: "string",
      country: "string",
    },
    favouriteTeams: {
      sports: {
        footbal: "string",
        basketball: "string",
      },
      chess: {
        player1: "string",
        player2: "string",
      },
    },
    interests: ["string", "string"],
  };

  const newStudent = {
    location: {
      city: "Posadas",
      country: "Argentina",
    },
    lastName: "Szychowski,",
    firstName: "Jose",
    favouriteTeams: {
      chess: {
        player1: "Dmitri",
        player2: "Magnusen",
      },
      sports: {
        basketball: 1,
        footbal: "Inter Miami",
      },
    },
    interests: ["History", "Science"],
  };

  expect(validateObject(newStudent, newStudentSchema)).toBe(false);
});