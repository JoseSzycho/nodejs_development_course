# Class 5

This class is all about functions.

## Main topics

## First-class function

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.


__In Javascript, functions are first-class functions.__

```js
// Example 1: Assigning a function to a variable
function sayHello(name) {
  return `Hello, ${name}!`;
}

const greetingFunc = sayHello;
console.log(greetingFunc("John")); // Output: "Hello, John!"

// Example 2: Function as an argument to another function
function square(x) {
  return x * x;
}

function applyOperation(func, num) {
  return func(num);
}

const result = applyOperation(square, 5);
console.log(result); // Output: 25

// Example 3: Function returning another function
function add(n) {
  return function addN(x) {
    return x + n;
  };
}

const addFive = add(5);
console.log(addFive(10)); // Output: 15

// Example 4: Functions in an array
function greetEnglish(name) {
  return `Hello, ${name}!`;
}

function greetSpanish(name) {
  return `¡Hola, ${name}!`;
}

function greetFrench(name) {
  return `Bonjour, ${name}!`;
}

const greetingFunctions = [greetEnglish, greetSpanish, greetFrench];
console.log(greetingFunctions[1]("Maria")); // Output: ¡Hola, Maria!

```


