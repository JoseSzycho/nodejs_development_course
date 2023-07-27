

# Class 5

__Table of content:__

* 1. [First-class function](#First-classfunction)
* 2. [Ways to declare a function](#Waystodeclareafunction)
	* 2.1. [Function declaration](#Functiondeclaration)
	* 2.2. [Anonymous function expression](#Anonymousfunctionexpression)
	* 2.3. [Named function expression](#Namedfunctionexpression)
	* 2.4. [Arrow function expression](#Arrowfunctionexpression)
	* 2.5. [Immediately Invoked Function Expression (IIFE)](#ImmediatelyInvokedFunctionExpressionIIFE)
* 3. [Function parameters](#Functionparameters)
	* 3.1. [Default parameters](#Defaultparameters)
	* 3.2. [Rest parameters](#Restparameters)
* 4. [Generator function](#Generatorfunction)
* 5. [Object destructuring](#Objectdestructuring)
* 6. [Return values](#Returnvalues)
* 7. [Function that return functions](#Functionthatreturnfunctions)


##  1. <a name='First-classfunction'></a>First-class function

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

## Pure functions

A function is a reusable block of code that accepts arguments and returns a computed value.

A pure function always returns the same value given the same arguments and produces no side effects.

__Pure functions are:__
* More redeable
* Better for optimization
* Better for tesitning
* Independent
* Don't have side effects.

```js
// Pure function example
function sum(a, b) {
  return a + b
}

console.log(sum(1, 2)) // logs 3
console.log(sum(1, 2)) // logs 3

// Impure function example (value can be modified)
let value = 0

function add(increase) {
  value += increase // Side-effect
  return value
}

console.log(add(2)) // logs 2
console.log(add(2)) // logs 4
```

## Higher-order functions (HOF)

Have two criterias, if follow one of both of them is high order function.

1. Takes a function as an argument
2. Return function as a result

```js
// Example 1 with out HOF
//Suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius))
//But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?


// Example 2 same exercise but with HOG
const radius = [1, 2, 3];

// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
```
[More information here.](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.)

##  2. <a name='Waystodeclareafunction'></a>Ways to declare a function

###  2.1. <a name='Functiondeclaration'></a>Function declaration

The function declaration creates a binding of a new function to a given name.

```js
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

###  2.2. <a name='Anonymousfunctionexpression'></a>Anonymous function expression

The function keyword can be used to define a function inside an expression.

```js
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

###  2.3. <a name='Namedfunctionexpression'></a>Named function expression

It creates a function expression with a named function.

```js
const calcArea = function calcArea(x, y){
  return x*y;
}

console.log(calcArea(3,5));
// // Expected output: 15
```
This helps for debugging, as the function will left traces.

###  2.4. <a name='Arrowfunctionexpression'></a>Arrow function expression

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

###  2.5. <a name='ImmediatelyInvokedFunctionExpressionIIFE'></a>Immediately Invoked Function Expression (IIFE)

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

##  3. <a name='Functionparameters'></a>Function parameters

There are two special kinds of parameter syntax:
* __default parameters__
* __rest parameters__

Be aware of this:

* __Arguments are Passed by Value:__ Changes to arguments are not visible (reflected) outside the function.
* __Objects are Passed by Reference:__ Changes to object properties are visible (reflected) outside the function.

###  3.1. <a name='Defaultparameters'></a>Default parameters

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

###  3.2. <a name='Restparameters'></a>Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array using the spread operator.

```js
// Example
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

##  4. <a name='Generatorfunction'></a>Generator function

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

##  5. <a name='Objectdestructuring'></a>Object destructuring

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

##  6. <a name='Returnvalues'></a>Return values

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

##  7. <a name='Functionthatreturnfunctions'></a>Function that return functions


In JavaScript, you can create a function that returns another function. This concept is known as a "higher-order function." They are a powerful feature of JavaScript and enable the creation of more flexible and reusable code.

```js
// Example
function createMultiplier(multiplier) {
  // Inner function returned by the outer function
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10 (2 * 5)
console.log(triple(5)); // Output: 15 (3 * 5)
```

## Closures

A __closure__ is the __combination of a function bundled together (enclosed) with references to its surrounding state__ (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
// Example 1

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

//See that we can inmediately use add, if we create the add closure with out the (...)() we must first initializate the closure in a new variable, example: const newAdd = add();

add();
add();
add();// the counter is now 3


// Example 2: with different "private methods"
const Counter = (() => {
  // Private variable, not accessible from outside
  let count = 0;

  // Private function, not accessible from outside
  const increment = () => {
    count++;
  };

  // Public methods, accessible from outside
  return {
    getCount: () => count,
    increment: () => increment()
  };
})();

console.log(Counter.getCount()); // Output: 0
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 2
```

[More information here.](https://www.w3schools.com/js/js_function_closures.asp)

## Functional caching

__How to use Memoize to cache JavaScript function results and speed up your code:__

Memoizing in simple terms means memorizing or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.

__Functional Caching is the process of saving a cache that has the values recorded from the previous time(s) the function was executed.__

So say we want to create a function that adds all integers beneath a given integer, but also saves the values of the last time it ran in an array so that the function can save itself work the next time that it ran? Let’s try it out.

```js
// a simple function to add something
const add = (n) => (n + 10);
add(9);

// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
```

## Lazy functions

