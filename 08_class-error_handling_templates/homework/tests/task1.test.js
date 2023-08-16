const localize = require("../tasks/task1");

const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

test("Expect error if languaje is not available", () => {
  const language = "es";
  const greeting = "greet";

  expect(() => localize`${greeting} ${language} ${translations}`).toThrow(
    "Languaje not available."
  );
});

test("Expect error if translation is not available.", () => {
  const language = "en";
  const greeting = "welcome";

  expect(() => localize`${greeting} ${language} ${translations}`).toThrow(
    "Translation not available."
  );
});

test("Expect error if translation object is not available.", () => {
  const language = "en";
  const greeting = "welcome";

  expect(
    () => localize`${greeting} ${language} ${"translation block"}`
  ).toThrow("Translations must be an object.");
});

test("Expect to return desired translations when languaje is french", () => {
  const language = "fr";
  const greeting = "greet";
  const introduction = "intro";

  expect(localize`${greeting} ${language} ${translations}`).toBe("Bonjour");
  expect(localize`${introduction} ${language} ${translations}`).toBe(
    "Bienvenue sur notre site web"
  );
});

test("Expect to return desired translations when languaje is english", () => {
  const language = "en";
  const greeting = "greet";
  const introduction = "intro";

  expect(localize`${greeting} ${language} ${translations}`).toBe("Hello");
  expect(localize`${introduction} ${language} ${translations}`).toBe(
    "Welcome to our website"
  );
});
