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

## JavaScript automatic semicolon insertion

In javascript, the use of the semicolon is optional, and in cases where we omit them, JavaScript uses the Automatic Semicolon Insertion (ASI) and assumes a “;” in some places in your JS code, even if you didn’t write one there.

JavaScript does this because if we omit a required “;” our program would fail, but sometimes this javascript behavior then does unwanted things.

### Rules 

1. When next line starts from `}`
2. in the end of a program
3. in the end of line with return
4. in the end of line with break
5. in the end of line with throw
6. in the end of line with continue
7. if next line break current code

### Situations where does not work as espected

```js
// Example 1
const a = "hey"
const b = "hey"
const str = a + " " + b
["h", "e", "y"].map(x=> x.toUpperCase)

//the problem is that b wil be in real const str = a + " " + b["h", "e", "y"].map(x=> x.toUpperCase)

// Example 2
const fn = () => {
	return // => error becaouse a semicolon will be added here
	{
	a: 42
	}
}

fn().a // undefined

// Example 3
1+1
-1 +1 === 0 ? alert(0) : alert(2) // => alert(2)

```

## Single cuote vs double cuote

There is only one difference in the usage of single and double quotes, and it comes down to what quote character you need to escape using the backslash character (\): \’ or \”. Each type of quote should escape its own type.

```js
// Examples

const newLine = 'this is the first line \n This is a second'

const str = 'You can\'t'; // the \ indicantes it doest finish in can

const str = "You can't" // it works
const str = 'this is a quote: "..." '; // it works

const es6 =  `A string
on multiple lines` // we ca use multi lines for writing
```

## Template literals

Template literals are literals delimited with backtick `(`)` characters, allowing for __multi-line strings__, __string interpolation__ with embedded expressions, and special constructs called __tagged templates__.

__Examples: __

```js

// Multi-line and string interpolation
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`); // ${2 * a + b} is the interpolation. You dont have to + ..... + 
// "Fifteen is 15 and
// not 20."
```

### Tagged templates

A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

```js
// Example

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```