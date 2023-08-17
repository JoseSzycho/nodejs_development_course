const multiline = require("../tasks/task3");

test("Expect error if expression is not an string", () => {
  expect(() => multiline`${3}`).toThrow("Input must be a string.");
});

test("Expect text to be returned  with multiline", () => {
  console.log(
    multiline`${`
    function add(a, b) {
    return a + b;
    }
    ;  `}`
  );
});

test("Expect text to be returned  with multiline", () => {
  console.log(
    multiline`${`

      hi this is a text
        with    multiple
        
        identation level
and many


empty lines`}`
  );
});
