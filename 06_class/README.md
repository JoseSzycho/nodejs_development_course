# Class 06 - Objects

## What are objects

Objects are one of the fundamental data types, and they are __used to store and organize data in a structured manner__. An object is a __collection of key-value pairs__ where each key represents a property, and each value represents the value associated with that property.

__An object variable contains the reference in memory of the object.__

## Ways to create objects

There are to principal ways to create an object.

### Object literals

This is the simplest and most common way to create an object. It uses curly braces {} and defines the properties and their values within the braces, each key-value is separated by a comma.

```js
const person = {
  name: "John",
  age: 30,
  city: "New York",
  isEmployed: true,
};
```

### Object constructor

You can also create an object using the Object constructor function and then adding properties and values to it.

```js

// With constructor functions, the newly created object inherits from the constructor's prototype
//const car = new Car();

const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
person.isEmployed = true;
```

__Advantages of using the object constructor:__

* Simple and easy to understand.
* Allows adding properties dynamically to the object.

__Disadvantages:__

* No easy way to set the prototype of the object explicitly.
* Objects created with the constructor do not have a direct relationship with a prototype.

### Object.create

The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

```js
//Object.create builds an object that inherits directly from the one passed as its first argument.

const personPrototype = {
  age: 30,
  city: "New York",
  isEmployed: true,
};

const person = Object.create(personPrototype);
person.name = "John";

person.age // => 30
```

__Advantages of using Object.create():__

* Allows you to set up a prototype chain, enabling prototype-based inheritance.
* Provides a cleaner separation between the prototype and instance-specific properties.

__Disadvantages:__

* Requires creating a separate prototype object first.
* More complex than the object constructor for simple object creation.

### ES6 classes

ES6 classes are a syntactical sugar over the existing prototype-based inheritance model of JavaScript. They provide a more familiar and structured way to create constructor functions and handle inheritance.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

## Ways to acces an object property

### Dot Notation

```js
const person = {
  name: "John",
  age: 30,
};

console.log(person.name); // Output: "John"
console.log(person.age);  // Output: 30
```

### Bracket notation
```js
const person = {
  name: "John",
  age: 30,
};

console.log(person["name"]); // Output: "John"
console.log(person["age"]);  // Output: 30

const propertyName = "age";
console.log(person[propertyName]); // Output: 30
```

## Object inheritance

__Long story short: If we try to find in its properties, if not found we search the global prototype, if not found it goes to the Object prototype.__ 

In JavaScript, the inheritance chain is the relationship formed between objects through their prototypes. This chain allows objects to inherit properties and methods from their prototype objects and forms the basis of prototype-based inheritance in the language.

Each object in JavaScript has an internal reference to its prototype. When you access a property or method on an object, if it's not found directly on the object, JavaScript follows the prototype chain and looks for the property or method in the object's prototype. If it's not found there, the search continues up the chain until the property or method is found, or until the end of the prototype chain is reached, which is Object.prototype.


```js
// Define a constructor function "Person"
function Person(name) {
  this.name = name;
}

// Add a method to the prototype of "Person"
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

// Create an instance of "Person"
const john = new Person("John");

// Access the "name" property and the "sayHello" method
console.log(john.name); // Output: "John"
john.sayHello(); // Output: "Hello, my name is John."

john -> Person.prototype -> Object.prototype -> null
```

```js
// Another example for seing how the chain works

// Define a constructor function "Person"
function Person(name) {
  this.name = name;
}

// Add a constant to the prototype of "Person"
Person.prototype.age = 35;

// Create an instance of "Person"
const Bob = new Person("Bob");

console.log(Bob.age); // 35 becaouse of inheritance
Bob -> Person.prototype.age

Bob.age = 28;
console.log(Bob.age); // 28
```

## Inmutable objects

Objcets in JavaScript ara mutable by defaoult, but there are some external libraries that can make objects inmutables.

## Ways to copy an object

### __Shallow Copy using Object.assign():__

If you want to create a new object that is a shallow copy of the original object (i.e., the properties of the new object reference the same objects in memory as the original), you can use Object.assign()

```js
const originalObject = { name: "John", age: 30 };
const shallowCopy = Object.assign({}, originalObject);

console.log(shallowCopy); // Output: { name: "John", age: 30 }
```

### Shallow Copy using the Spread Operator (ES6+):

The spread operator ... is another way to perform a shallow copy of an object.

Both Object.assign() and the spread operator create a new object with the same top-level properties as the original object. However, if the properties themselves are objects or arrays, they will be copied by reference. This means that if you modify a nested object in the copied object, it will also affect the original object.

```js
const originalObject = { name: "John", age: 30 };
const shallowCopy = { ...originalObject };

console.log(shallowCopy); // Output: { name: "John", age: 30 }
```

### Deep Copy using JSON.parse() and JSON.stringify():

If you need a deep copy of an object (i.e., creating a new object with all properties and nested properties copied by value rather than by reference), you can use JSON.parse() and JSON.stringify().

Note that using JSON.parse() and JSON.stringify() to perform a deep copy has some limitations. It will not work with functions, undefined, or circular references in the original object, as these cannot be represented in JSON.

```js
const originalObject = { name: "John", age: 30, address: { city: "New York" } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));

console.log(deepCopy); // Output: { name: "John", age: 30, address: { city: "New York" } }
```

### Deep Copy using External Libraries:

For more complex scenarios or cases with functions, undefined values, or circular references, you might consider using external libraries like Lodash's cloneDeep() method or Immutable.js's utilities for deep copying.

```js
const _ = require("lodash");

const originalObject = { name: "John", age: 30, address: { city: "New York" } };
const deepCopy = _.cloneDeep(originalObject);

console.log(deepCopy); // Output: { name: "John", age: 30, address: { city: "New York" } }
```

## Comparing if two obcejts are equal

There is no method in JavaScript for comparing objects, as the properties may be changen in position, or when you copy the objects, some information may be lost, as in the case of Deep Copy where you lost the functions.

One simple way is using external libraryis, like __lodash__.

```js
const _ = require('lodash');

const obj1 = { key: 'value', nested: { foo: 'bar' } };
const obj2 = { key: 'value', nested: { foo: 'bar' } };
const obj3 = { key: 'different value', nested: { foo: 'bar' } };

console.log(_.isEqual(obj1, obj2)); // true
console.log(_.isEqual(obj1, obj3)); // false
```

## Object length

There are several ways for knowing the length of an objects. Some ways are :

### Object.getOwnPropertyNames(<<obj>obj>)

Allows you to retrieve an array of all property names (including non-enumerable properties) of an object, both enumerable and non-enumerable. 

__This method does not include inherited properties from the prototype chain.__

```js
const obj = { a: 1, b: 2, c: 3 };

const propertyNames = Object.getOwnPropertyNames(obj);
const length = propertyNames.length;
console.log(length); // 3
```

### Object.keys(<<obj>obj>)

This method to get an array of the object's own enumerable property names (keys), and then you can simply find the length of that array.

__This method does not include inherited properties from the prototype chain.__

```js
const obj = { a: 1, b: 2, c: 3 };

const length = Object.keys(obj).length;
console.log(length); // 3
```

### Object.entries(<<obj>obj>)

The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

```js
const obj = { a: 1, b: 2, c: 3 };

const length = Object.entries(obj).length;
console.log(length); // 3
```

__This method does not include inherited properties from the prototype chain.__

### Object.values(<<obj>obj>)

count of the object's values, you can use Object.values() to get an array of the object's own enumerable property values, and then get the length of that array.

__This method does not include inherited properties from the prototype chain.__

```js
const obj = { a: 1, b: 2, c: 3 };

const length = Object.values(obj).length;
console.log(length); // 3
```

### for in cycle

A custom function to count the properties of an object by iterating over its keys and counting them. It also counts inherited properties if they are enumrables.

```js
function getObjectLength(obj) {
  let count = 0;
  for (const key in obj) {
    if (obj[key]) { // If whe change to obj.hasOwnProperty(key), only counts for the own properties
      count++;
    }
  }
  return count;
}

const obj = { a: 1, b: 2, c: 3 };

const length = getObjectLength(obj);
console.log(length); // 3
```
