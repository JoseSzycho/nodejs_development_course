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

### Anonymous function expression

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

### Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

__The primary purpose of using IIFE__ is to create a new scope, allowing you to encapsulate code and avoid polluting the global namespace. 

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```
Is commonly used for authentification, conections to data bases
SOLEMOS USARLO PARA autentificacion por ejemplo.
para conexiones con base de datos
Se usa como para poder inicializar algo
buscar bien para que lo querriamos usar.

[More information here.](https://developer.mozilla.org/es/docs/Glossary/IIFE)

## Function parameters

There are two special kinds of parameter syntax:
* __default parameters__
* __rest parameters__

Be aware of this:

* __Arguments are Passed by Value:__ Changes to arguments are not visible (reflected) outside the function.
* __Objects are Passed by Reference:__ Changes to object properties are visible (reflected) outside the function.

### Default parameters

In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for b in the function head:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

### Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array using the spread operator.

```js
// Example
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Generator function

The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.

```js
// Example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

## Object destructuring

Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables with the same name as the property keys. It provides a concise way to work with objects and access their properties. Let's see how object destructuring works in combination with functions.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'USA',
};

// Be aware the parameters are inside {} and have the same name as the object properties
function printPersonInfo({ firstName, lastName, age }) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Age: ${age}`);
}

printPersonInfo(person);
// => First Name: John
// => Last Name: Doe
// => Age: 30
```

## Return values

Considering a function returns an array, object, etc. We can receibe them in the next way:

```js
// Considere the element of the right to be the returned value
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

// Keys must have the same name of the returned element
const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);

// Example
const doSmth = () => {
  return {
    name: "roger",
    age: 22
  };
}
const { age, name } = doSmth();

```