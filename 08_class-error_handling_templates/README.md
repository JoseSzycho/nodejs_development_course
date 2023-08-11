# Class 8

## Error handling

[Deeper information here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

### Exception handling statements

You can throw exceptions using the `throw` statement and handle them using the `try...catch` statements.

```js
// Syntax
throw expression;

// Examples
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
throw new Error("Error hehe")
```

### try...catch statement

The `try...catch` statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the `try...catch` statement catches it.

The` try...catch` statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block.

The `try` statement stops executing its code as soon the exepction is thrown.

```js

// Example
try {
  throw new Error("myException"); // generates an exception
} catch (err) {
  // statements to handle any exceptions
  console.log(err); // pass exception object to error handler
}
```

### the finally block

The `finally block` contains statements to be executed after the try and catch blocks execute. Additionally, the `finally block` executes before the code that follows the `try…catch…finally` statement.

```js
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

### Nesting try...catch statements

You can nest one or more `try...catch` statements.

If an inner `try` block does not have a corresponding `catch` block:

1. it must contain a finally block, and
2. the enclosing try...catch statement's catch block is checked for a match.

For more information, see nested try-blocks on the try...catch reference page.


