# Class 03

## Variable types
Have script have to ways for declaring variables, __both of them are block scopded__.
* let
* const

__Let is mutable__ while __const is unmutable__.
It is __important__ to note that objects and arrrays declared with __"const"__ can have the their propertires or elements modified, but the binding to the variable cannot.

## Hoisting

Hoisting in JavaScript is a behavior that allows variable and function declarations to be moved to the top of their containing scope during the compilation phase, before the code is executed. This can lead to some unexpected results if not understood properly.

Here's how hoisting works for variables and functions:

Variable Hoisting:
In JavaScript, when you declare a variable using var, let, or const, the declaration is hoisted to the top of its scope but not the initialization (assigning a value to the variable). Let's see an example:

```js
console.log(myVar); // Output: undefined
var myVar = 42;
```

Even though myVar is accessed before its actual declaration, it doesn't throw an error. The variable is hoisted, so the declaration is moved to the top, but the initialization is not. The output is undefined.

__Function Hoisting:__
Function declarations are also hoisted to the top of their scope, and they can be called before their actual declarations in the code. For example:

```js
foo(); // Output: "Hello, I am foo!"

function foo() {
  console.log("Hello, I am foo!");
}
```

The function foo can be called before its declaration, thanks to hoisting.

However, it's important to note that function expressions (functions assigned to variables) are not hoisted.

```js
// This will throw an error
bar(); // Uncaught TypeError: bar is not a function

var bar = function() {
  console.log("Hello, I am bar!");
};
```

In this case, the variable bar is hoisted, but its value (the function) is not assigned yet, hence the error.

To avoid confusion and potential bugs caused by hoisting, it's a good practice to declare and initialize variables at the beginning of their scope and define functions before calling them. Also, consider using let and const instead of var, as they have block scope and are less prone to hoisting-related issues.

## Data types
All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

JavaScript have 8 data types. These are all primitives (except, see object):

* __Number:__ Represents both integer and 
floating-point numbers.
    * Positive values greater than Number.MAX_VALUE are converted to +Infinity.
    * Positive values smaller than Number.MIN_VALUE are converted to +0.
    * Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
    * Negative values greater than -Number.MIN_VALUE are converted to -0.

* __String:__ Represents a sequence of characters (text).

* __Boolean:__ Represents a logical value, either true or false.
* __Null:__ Represents the intentional absence of any value.
* __Undefined:__ Represents a variable that has been declared but has not been assigned any value.
* __Symbol:__ used as property keys for objects to avoid naming collisions in properties and to create private members in classes.
* __BigInt:__ Represents integers with arbitrary precision (ES2020 and later).
* __Object:__ some people says it is primitive, other says it is non-primitive.
    * __Object:__ Represents a collection of key-value pairs. Objects are used to store complex data and can contain functions, arrays, and other objects
    * __Array:__ Arrays are a type of object that represent ordered collections of elements. They can hold multiple values of any data type, and each element in the array is accessible using its index.
    * __Date__

__Some examples:__
```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

__Other important examples:__
```js
typeof NaN === "number"; // Despite being "Not-A-Number"
Nan == Nan // => false
Nan === Nan // => false

let val = NaN;
Number.isNan(val) // => true
if(val === val) // => false, only happens with NaN

// This stands since the beginning of JavaScript
typeof null === "object";
```

## Type conversion

JavaScript have two types of type convertions:
* __Implict / non-explicit__ 
* __Non-implicit / explicit__

### Implicit type convertion
 Happens automatically by JavaScript when an operation involves operands of different types.

```js
// Example
let num1 = 5;          // num1 is a number
let num2 = "10";       // num2 is a string

let result = num1 + num2; // JavaScript will convert num1 to a string and perform string concatenation.
console.log(result);   // Output: "510" (a string)
```

### Non-implicit / explicit type convertion
Developers can explicitly convert data from one type to another using various built-in functions or methods. 
```js
// Example
let strNumber = "42";
let num = Number(strNumber); // Converts the string "42" to a number 42
console.log(num); // Output: 42
```

__Some explicit__ type convertions are:
* __Number():__ Converts a value to a number.
* __parseInt() and parseFloat():__ Converts a string to an integer or floating-point number.
* __String():__ Converts a value to a string.
* __Boolean():__ Converts a value to a boolean.
* __BigInt():__ Converts a number into a big int.

__Explicit type convertions__ can also be:
* __Simple:__ Simple type conversion refers to converting primitive data types directly into other primitive data types, like the examples shown above.
* __Complex:__ Complex type conversion involves converting objects into primitive data types or other objects (arrays, objects, functions). This conversiones are done with:
  * toString()
  * valueOf()
  