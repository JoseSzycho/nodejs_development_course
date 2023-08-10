# Class 5

In this readme, the important concepts of the class will be provided and the homework to be carried out.

The homework development is in the folder `./homework/`.

**Table of content:**

<!-- vscode-markdown-toc -->

- 1. [Recommended read](#Recommendedread)
- 2. [First-class function](#First-classfunction)
- 3. [Pure functions](#Purefunctions)
- 4. [Higher-order functions (HOF)](#Higher-orderfunctionsHOF)
- 5. [Ways to declare a function](#Waystodeclareafunction)
  - 5.1. [Function declaration](#Functiondeclaration)
  - 5.2. [Anonymous function expression](#Anonymousfunctionexpression)
  - 5.3. [Named function expression](#Namedfunctionexpression)
  - 5.4. [Arrow function expression](#Arrowfunctionexpression)
  - 5.5. [Immediately Invoked Function Expression (IIFE)](#ImmediatelyInvokedFunctionExpressionIIFE)
- 6. [Function parameters](#Functionparameters)
  - 6.1. [Default parameters](#Defaultparameters)
  - 6.2. [Rest parameters](#Restparameters)
- 7. [Generator function](#Generatorfunction)
- 8. [Object destructuring](#Objectdestructuring)
- 9. [Return values](#Returnvalues)
- 10. [Function that return functions](#Functionthatreturnfunctions)
- 11. [Closures](#Closures)
- 12. [Functional caching](#Functionalcaching)
- 13. [Lazy functions](#Lazyfunctions)
  - 13.1. [Lazy evaluation](#Lazyevaluation)
  - 13.2. [Lazy loading](#Lazyloading)
- 14. [Currying](#Currying)
- 15. [Function composition](#Functioncomposition)
- 16. [Imperative vs declarative way of programming](#Imperativevsdeclarativewayofprogramming)
  - 16.1. [Imperative programming](#Imperativeprogramming)
  - 16.2. [Declarative programming](#Declarativeprogramming)
  - 16.3. [Pros and cons](#Prosandcons)
- 17. [Recursion and tail recursion](#Recursionandtailrecursion)
- 18. [Pointfree Style](#PointfreeStyle)
- 19. [Homework](#Homework)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Recommendedread'></a>Recommended read

This article is very helpfull for functional programming.

[Click here.](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)

## 2. <a name='First-classfunction'></a>First-class function

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

**In Javascript, functions are first-class functions.**

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

## 3. <a name='Purefunctions'></a>Pure functions

A function is a reusable block of code that accepts arguments and returns a computed value.

A pure function always returns the same value given the same arguments and produces no side effects.

**Pure functions are:**

- More redeable
- Better for optimization
- Better for tesitning
- Independent
- Don't have side effects.

```js
// Pure function example
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // logs 3
console.log(sum(1, 2)); // logs 3

// Impure function example (value can be modified)
let value = 0;

function add(increase) {
  value += increase; // Side-effect
  return value;
}

console.log(add(2)); // logs 2
console.log(add(2)); // logs 4
```

## 4. <a name='Higher-orderfunctionsHOF'></a>Higher-order functions (HOF)

Have two criterias, if follow one of both of them is high order function.

1. Takes a function as an argument
2. Return function as a result

```js
// Example 1 with out HOF
//Suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

// function to calculate diameter of the circle
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));
//But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?

// Example 2 same exercise but with HOG
const radius = [1, 2, 3];

// logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

// a reusable function to calculate area, diameter, etc
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
```

[More information here.](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.)

## 5. <a name='Waystodeclareafunction'></a>Ways to declare a function

### 5.1. <a name='Functiondeclaration'></a>Function declaration

The function declaration creates a binding of a new function to a given name.

```js
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

### 5.2. <a name='Anonymousfunctionexpression'></a>Anonymous function expression

The function keyword can be used to define a function inside an expression.

```js
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```

[More information here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

### 5.3. <a name='Namedfunctionexpression'></a>Named function expression

It creates a function expression with a named function.

```js
const calcArea = function calcArea(x, y) {
  return x * y;
};

console.log(calcArea(3, 5));
// // Expected output: 15
```

This helps for debugging, as the function will left traces.

### 5.4. <a name='Arrowfunctionexpression'></a>Arrow function expression

An **arrow function expression** is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

- Arrow functions cannot use yield within their body and cannot be created as generator functions.

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

### 5.5. <a name='ImmediatelyInvokedFunctionExpressionIIFE'></a>Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

**The primary purpose of using IIFE** is to create a new scope, allowing you to encapsulate code and avoid polluting the global namespace.

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

## 6. <a name='Functionparameters'></a>Function parameters

There are two special kinds of parameter syntax:

- **default parameters**
- **rest parameters**

Be aware of this:

- **Arguments are Passed by Value:** Changes to arguments are not visible (reflected) outside the function.
- **Objects are Passed by Reference:** Changes to object properties are visible (reflected) outside the function.

### 6.1. <a name='Defaultparameters'></a>Default parameters

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

### 6.2. <a name='Restparameters'></a>Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array using the spread operator.

```js
// Example
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## 7. <a name='Generatorfunction'></a>Generator function

The function\* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.

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

## 8. <a name='Objectdestructuring'></a>Object destructuring

Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables with the same name as the property keys. It provides a concise way to work with objects and access their properties. Let's see how object destructuring works in combination with functions.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  country: "USA",
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

## 9. <a name='Returnvalues'></a>Return values

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
    age: 22,
  };
};
const { age, name } = doSmth();
```

## 10. <a name='Functionthatreturnfunctions'></a>Function that return functions

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

## 11. <a name='Closures'></a>Closures

A **closure** is the **combination of a function bundled together (enclosed) with references to its surrounding state** (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
// Example 1

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

//See that we can inmediately use add, if we create the add closure with out the (...)() we must first initializate the closure in a new variable, example: const newAdd = add();

add();
add();
add(); // the counter is now 3

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
    increment: () => increment(),
  };
})();

console.log(Counter.getCount()); // Output: 0
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 2
```

[More information here.](https://www.w3schools.com/js/js_function_closures.asp)

## 12. <a name='Functionalcaching'></a>Functional caching

**How to use Memoize to cache JavaScript function results and speed up your code:**

Memoizing in simple terms means memorizing or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.

**Functional Caching is the process of saving a cache that has the values recorded from the previous time(s) the function was executed.**

So say we want to create a function that adds all integers beneath a given integer, but also saves the values of the last time it ran in an array so that the function can save itself work the next time that it ran? Let’s try it out.

```js
// a simple function to add something
const add = (n) => n + 10;
add(9);

// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
```

## 13. <a name='Lazyfunctions'></a>Lazy functions

### 13.1. <a name='Lazyevaluation'></a>Lazy evaluation

Lazy evaluation is a programming paradigm where the evaluation of an expression or function is delayed until its value is actually needed. In JavaScript, this can be achieved using functions, closures, and higher-order functions.

As a result, lazy evaluation suddenly rose to fame in functional programming for several reasons. It allows the programmer to access data structure components out of order after initializing them, as long as there are no circular dependencies. It also decreases an algorithm’s time complexity by removing transitory computations.

**It increases CPU performance but decreases RAM performance.**

```js
// Example

function lazyAdd(a, b) {
  return () => a + b; // This function is created, but the addition is not performed yet
}

const result = lazyAdd(5, 10); // No addition is done at this point

// Later, when the result is needed, the addition is performed
console.log(result()); // Output: 15
```

### 13.2. <a name='Lazyloading'></a>Lazy loading

Lazy loading is a technique used in web development to defer the loading of non-critical resources until they are needed. This can help improve the initial page load time and overall performance by loading resources only when they become necessary.
For example, let's say you have a JavaScript module with a function that is only required in certain situations:

```js
// Example

// lazyModule.js
export function lazyFunction() {
  console.log("Lazy function is executed!");
}

// Main script
// Some code...

// Only load the module when the condition is met
if (someCondition) {
  import("./lazyModule.js").then(({ lazyFunction }) => {
    lazyFunction(); // The function is executed only when the module is loaded
  });
}

// Some more code...
```

In this example, the lazyModule.js and its lazyFunction are only loaded and executed if someCondition is true. Otherwise, the code is not loaded, saving unnecessary resource requests and improving the page load time.

## 14. <a name='Currying'></a>Currying

It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

- It allows to solve a function parcially till you have all parameters available
- It helps us to create a higher-order function
- It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
- It is very useful in building modular and reusable code
- It helps us to avoid passing the same variable multiple times
- It makes the code more readable

```js
//Example 1

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6

// You can call the function partially
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

// Example 2 with arrow functions

const sum = (a) => (b) => (c) => a * b * c;
console.log(sum(1)(2)(3)); // 6
```

**You can also create a function to transform any function to the curry version.**

```js
function currying(fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}
```

## 15. <a name='Functioncomposition'></a>Function composition

Function composition is another powerful technique in functional programming, which involves combining two or more functions to create a new function. The output of one function becomes the input to the next function in the chain. This allows you to build complex transformations or computations by composing smaller, reusable functions together.

```js
// Example functions to be composed
const add = (x) => x + 1;
const square = (x) => x * x;
const subtractTen = (x) => x - 10;

// Manual function composition
const composedFunction = (x) => subtractTen(square(add(x)));

// Usage
const result = composedFunction(5);
console.log(result); // Output: ((5 + 1) * (5 + 1)) - 10 = 26
```

Using function composition can lead to code that is more modular, easier to reason about, and promotes reusability. By breaking down complex operations into smaller, focused functions, you can build a pipeline of transformations that are more manageable and easier to maintain. Additionally, it aligns well with the functional programming paradigm and encourages the use of pure functions, which can lead to more predictable and bug-free code.

## 16. <a name='Imperativevsdeclarativewayofprogramming'></a>Imperative vs declarative way of programming

Imperative and declarative programming are two different paradigms for writing computer programs. They represent different approaches to specifying how a program should
achieve its goal.

### 16.1. <a name='Imperativeprogramming'></a>Imperative programming

Imperative programming is a programming paradigm where the focus is on describing step-by-step how to achieve a certain task. In this style of programming, the programmer explicitly specifies the sequence of actions that the computer must take to solve the problem. The emphasis is on describing "how" to do something, often involving mutable state and explicit control flow.

**Characteristics of imperative programming:**

- Programs consist of a series of statements that modify the program's state.
- The control flow is typically achieved using loops, conditionals (if/else), and explicit instructions (e.g., "go to" statements).
- Mutable data is common, and changes to data are explicitly performed.
- The programmer needs to manage low-level details of the program's execution.

```py
# Python example: Imperative way to calculate the sum of numbers in an array
#
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total
```

### 16.2. <a name='Declarativeprogramming'></a>Declarative programming

Declarative programming is a programming paradigm where the focus is on describing what the program should accomplish without specifying the step-by-step process of achieving it. In this style of programming, the programmer defines the desired outcome or result, and the programming language or framework takes care of the underlying implementation details.

**Characteristics of declarative programming:**

- Programs describe the logic and relationships between elements, rather than specifying the exact sequence of steps.
  The emphasis is on "what" needs to be done, and the "how" is abstracted away.
- Functional programming is a common approach in declarative programming, where pure functions and immutable data are used.
- Declarative code is often more concise and easier to understand.

```py
# Python example: Declarative way to calculate the sum of numbers in an array
def sum_array(arr):
    return sum(arr)
```

### 16.3. <a name='Prosandcons'></a>Pros and cons

- Imperative programming allows fine-grained control and can be efficient for certain low-level tasks, but it can lead to more complex and harder-to-read code.
- Declarative programming promotes code simplicity, modularity, and easier maintenance, but it may require more abstraction and familiarity with the underlying language or framework.

Both paradigms have their place in software development, and a skilled programmer knows when to use each approach effectively based on the specific requirements of the problem being solved.

## 17. <a name='Recursionandtailrecursion'></a>Recursion and tail recursion

[Read this article.](https://dev.to/hi_iam_chris/recursion-and-tail-recursion-with-javascript-2fdg)

## 18. <a name='PointfreeStyle'></a>Pointfree Style

[Read this article.](https://blog.openreplay.com/forever-functional-pointfree-style-programming/)

## 19. <a name='Homework'></a>Homework

Task 1: Immutability and Pure Functions

1. Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.

2. Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.

Task 2: Function Composition and Point-Free Style

1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".

2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.

3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

Task 3: Closures and Higher-Order Functions

1. Create a function called `createCounter` that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.

2. Implement a higher-order function called `repeatFunction` that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.

Task 4: Recursion and Tail Call Optimization

1. Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.

2. Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

Task 5: Lazy Evaluation and Generators (do not use yield)

1. Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.

2. Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation.
