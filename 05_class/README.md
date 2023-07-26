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

## Ways to declare a function

### Function declaration

The function declaration creates a binding of a new function to a given name.

```js
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

### Function expression

The function keyword can be used to define a function inside an expression.

```js
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

### Named function expression

It creates a function expression with a named function.

```js
const calcArea = function calcArea(x, y){
  return x*y;
}

console.log(calcArea(3,5));
// // Expected output: 15
```
This helps for debugging, as the function will left traces.

### Arrow function expression

An __arrow function expression__ is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

* Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

* Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

* Arrow functions cannot use yield within their body and cannot be created as generator functions.

```js
const func = (x) => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed

// For returning objects, objcet must be wraped in ()
const func = () => ({ foo: 1 });

// Cannot be used as a method
const obj = {
  i: 10,
  b: () => console.log(this.i, this), // bad practice, it wont work as it dont have binding this.
  c() {
    console.log(this.i, this);
  },
};



```