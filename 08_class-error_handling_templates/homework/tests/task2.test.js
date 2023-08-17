const { highlight, highlightKeywords } = require("../tasks/task2/task2");

test("Expect errror if template is not a string", () => {
  const keywords = ["JavaScript", "template", "tagged"];
  const template = 1;
  expect(() => highlightKeywords(template, keywords)).toThrow(
    "Template must be a string."
  );
});

test("Expect errror if keyword is not a string", () => {
  const keywords = 5;
  const template = "${0}";
  expect(() => highlightKeywords(template, keywords)).toThrow(
    "Keywords must be a array."
  );
});

test("Expect keyword to return highlited", () => {
  const helloWorld = "hello world";
  expect(highlight(helloWorld)).toBe(
    "<span class='highlight'>hello world</span>"
  );
});

test("Expect text to return highlighted", () => {
  const keywords = ["JavaScript", "template", "tagged"];
  const template =
    "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

  expect(highlightKeywords(template, keywords)).toBe(
    "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
  );
});

test("Expect text to return highlighted with reamding expressions", () => {
  const keywords = ["test1", "test2", "test3"];
  const template = "test1 ${0} test2 ${1} test3 ${2} test4 ${3}.";

  expect(highlightKeywords(template, keywords)).toBe(
    "test1 <span class='highlight'>test1</span> test2 <span class='highlight'>test2</span> test3 <span class='highlight'>test3</span> test4 ${3}."
  );
});
