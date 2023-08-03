# Class 06 - Objects

## Table of content

<!-- TOC -->

- [Class 06 - Objects](#class-06---objects)
    - [Table of content](#table-of-content)
    - [What are objects](#what-are-objects)
    - [Ways to create objects](#ways-to-create-objects)
        - [Object literals](#object-literals)
        - [Object constructor](#object-constructor)
        - [Object.create](#objectcreate)
        - [ES6 classes](#es6-classes)
    - [Ways to acces an object property](#ways-to-acces-an-object-property)
        - [Dot Notation](#dot-notation)
        - [Bracket notation](#bracket-notation)
    - [Object inheritance](#object-inheritance)
    - [Inmutable objects](#inmutable-objects)
    - [Ways to copy an object](#ways-to-copy-an-object)
        - [**Shallow Copy using Object.assign:**](#shallow-copy-using-objectassign)
        - [Shallow Copy using the Spread Operator ES6+:](#shallow-copy-using-the-spread-operator-es6)
        - [Deep Copy using JSON.parse and JSON.stringify:](#deep-copy-using-jsonparse-and-jsonstringify)
        - [Deep Copy using External Libraries:](#deep-copy-using-external-libraries)
    - [Comparing if two obcejts are equal](#comparing-if-two-obcejts-are-equal)
    - [Object length](#object-length)
        - [Object.getOwnPropertyNames<<obj>obj>](#objectgetownpropertynamesobjobj)
        - [Object.keys<<obj>obj>](#objectkeysobjobj)
        - [Object.entries<<obj>obj>](#objectentriesobjobj)
        - [Object.values<<obj>obj>](#objectvaluesobjobj)
        - [for in cycle](#for-in-cycle)
    - [Getter and setter methods](#getter-and-setter-methods)
        - [Getter](#getter)
        - [Setter](#setter)
    - [Hide object property](#hide-object-property)
    - [Object property attributes](#object-property-attributes)
        - [[[Get]]](#get)
        - [[[Set]] undefined si nio lo ponemos](#set-undefined-si-nio-lo-ponemos)
        - [[[Value]]](#value)
        - [[[Writable]]](#writable)
        - [[Enumerable]]](#enumerable)
        - [[[Configurable]]](#configurable)
    - [Read property descriptors of a object](#read-property-descriptors-of-a-object)
    - [Set / modify property descriptors of a object](#set--modify-property-descriptors-of-a-object)
    - [Ways to protect an object](#ways-to-protect-an-object)
        - [Object.preventExtensions](#objectpreventextensions)
        - [Object.seal](#objectseal)
        - [Object.freeze **STRONGEST ONE**](#objectfreeze-strongest-one)
        - [Object.freeze vs Object.seal vs Object.preventExtensions](#objectfreeze-vs-objectseal-vs-objectpreventextensions)
    - [Homework](#homework)
        - [Task 1: Object Property Manipulation](#task-1-object-property-manipulation)
        - [Task 2: Object Property Enumeration and Deletion](#task-2-object-property-enumeration-and-deletion)
        - [Task 3: Object Property Getters and Setters](#task-3-object-property-getters-and-setters)
        - [Task 4: Advanced Property Descriptors](#task-4-advanced-property-descriptors)
        - [Task 5: Object Observation](#task-5-object-observation)
        - [Task 6: Object Deep Cloning](#task-6-object-deep-cloning)
        - [Task 7: Object Property Validation](#task-7-object-property-validation)

<!-- /TOC -->

## What are objects

Objects are one of the fundamental data types, and they are **used to store and organize data in a structured manner**. An object is a **collection of key-value pairs** where each key represents a property, and each value represents the value associated with that property.

**An object variable contains the reference in memory of the object.**

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

**Advantages of using the object constructor:**

- Simple and easy to understand.
- Allows adding properties dynamically to the object.

**Disadvantages:**

- No easy way to set the prototype of the object explicitly.
- Objects created with the constructor do not have a direct relationship with a prototype.

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

person.age; // => 30
```

**Advantages of using Object.create():**

- Allows you to set up a prototype chain, enabling prototype-based inheritance.
- Provides a cleaner separation between the prototype and instance-specific properties.

**Disadvantages:**

- Requires creating a separate prototype object first.
- More complex than the object constructor for simple object creation.

### ES6 classes

ES6 classes are a syntactical sugar over the existing prototype-based inheritance model of JavaScript. They provide a more familiar and structured way to create constructor functions and handle inheritance.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
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
console.log(person.age); // Output: 30
```

### Bracket notation

```js
const person = {
  name: "John",
  age: 30,
};

console.log(person["name"]); // Output: "John"
console.log(person["age"]); // Output: 30

const propertyName = "age";
console.log(person[propertyName]); // Output: 30
```

## Object inheritance

**Long story short: If we try to find in its properties, if not found we search the global prototype, if not found it goes to the Object prototype.**

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

### **Shallow Copy using Object.assign():**

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

One simple way is using external libraryis, like **lodash**.

```js
const _ = require("lodash");

const obj1 = { key: "value", nested: { foo: "bar" } };
const obj2 = { key: "value", nested: { foo: "bar" } };
const obj3 = { key: "different value", nested: { foo: "bar" } };

console.log(_.isEqual(obj1, obj2)); // true
console.log(_.isEqual(obj1, obj3)); // false
```

## Object length

There are several ways for knowing the length of an objects. Some ways are :

### Object.getOwnPropertyNames(<<obj>obj>)

Allows you to retrieve an array of all property names (including non-enumerable properties) of an object, both enumerable and non-enumerable.

**This method does not include inherited properties from the prototype chain.**

```js
const obj = { a: 1, b: 2, c: 3 };

const propertyNames = Object.getOwnPropertyNames(obj);
const length = propertyNames.length;
console.log(length); // 3
```

### Object.keys(<<obj>obj>)

This method to get an array of the object's own enumerable property names (keys), and then you can simply find the length of that array.

**This method does not include inherited properties from the prototype chain.**

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

**This method does not include inherited properties from the prototype chain.**

### Object.values(<<obj>obj>)

count of the object's values, you can use Object.values() to get an array of the object's own enumerable property values, and then get the length of that array.

**This method does not include inherited properties from the prototype chain.**

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
    if (obj[key]) {
      // If whe change to obj.hasOwnProperty(key), only counts for the own properties
      count++;
    }
  }
  return count;
}

const obj = { a: 1, b: 2, c: 3 };

const length = getObjectLength(obj);
console.log(length); // 3
```

## Getter and setter methods

Setter and getter methods are used to define custom behavior when setting and getting the values of an object's properties. They allow you to have more control over the property access and provide additional functionality, such as validation or computed values.

### Getter

The `get` syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

```js
const obj = {
  _name: "John",
  get name() {
    console.log("Getting name...");
    return this._name;
  },
};

console.log(obj.name); // Output: "Getting name..." and "John"
```

### Setter

The `set` syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

```js
const obj = {
  _name: "",
  set name(newName) {
    console.log("Setting name...");
    this._name = newName;
  },
};

obj.name = "Alice"; // Output: "Setting name..."
console.log(obj._name); // Output: "Alice"
```

## Hide object property

This can be made using Class. We will se this in next class.

## Object property attributes

**The default only appears if whe create a property using Object.defineProperty and we do not set certain attribute.**

### [[Get]]

Is undefined if we not set it.

### [[Set]] undefined si nio lo ponemos

Is undefined if we not set it.

### [[Value]]

The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). Defaults to undefined.

### [[Writable]]

`true` if the value associated with the property may be changed with an assignment operator. Defaults to false.

### [Enumerable]]

`true` if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

### [[Configurable]]

when this is set to `false`,

- the type of this property cannot be changed between data property and accessor property, and
- the property may not be deleted, and
- other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).

## Read property descriptors of a object

El método Object.getOwnPropertyDescriptors(<object>) es una función de JavaScript que devuelve un objeto que contiene los descriptores de todas las propiedades directas (enumerables y no enumerables) de un objeto dado.

```js
const obj = {
  prop1: 42,
  prop2: "Hello",
  prop3: true,
};

const descriptors = Object.getOwnPropertyDescriptors(obj);

console.log(descriptors.prop1);
// Output: { value: 42, writable: true, enumerable: true, configurable: true }

console.log(descriptors.prop2);
// Output: { value: 'Hello', writable: true, enumerable: true, configurable: true }

console.log(descriptors.prop3);
// Output: { value: true, writable: true, enumerable: true, configurable: true }
```

## Set / modify property descriptors of a object

The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

```js
const obj = {};

// Define a new property with specific attributes
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(obj.name); // Output: "John"

// Trying to change the value of a non-writable property will not work silently in strict mode
obj.name = "Jane"; // This will not have any effect due to non-writable attribute

// Enumerate properties (since it's enumerable)
for (const key in obj) {
  console.log(key); // Output: "name"
}

// Trying to delete a non-configurable property will not work silently
delete obj.name; // This will not have any effect due to non-configurable attribute

console.log(obj.name); // Output: "John" (property still exists)
```

## Ways to protect an object

### Object.preventExtensions()

built-in method that allows you to prevent any new properties from being added to an object. It effectively makes an object non-extensible, meaning that you cannot add new properties to it, but you can still modify or delete existing properties.

```js
const obj = {
  prop1: "value 1",
  prop2: "value 2",
};

console.log(Object.isExtensible(obj)); // Output: true (Object is initially extensible)

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj)); // Output: false (Object is now non-extensible)

obj.prop3 = "value 3"; // Attempt to add a new property

console.log(obj.prop3); // Output: undefined (Property was not added)

obj.prop1 = "modified value"; // You can still modify existing properties

console.log(obj.prop1); // Output: "modified value"

delete obj.prop2; // You can still delete existing properties

console.log(obj.prop2); // Output: undefined (Property was deleted)
```

### Object.seal()

Is a built-in method that provides a way to seal an object, preventing the addition or deletion of properties and making all existing properties non-configurable. However, it allows you to modify the values of existing properties.

**It works by making:**

- Object.preventExtenions(obj)
- Makes al properties [[Configurable]] = false

```js
const obj = {
  prop1: "value 1",
  prop2: "value 2",
};

console.log(Object.isExtensible(obj)); // Output: true (Object is initially extensible)
console.log(Object.isSealed(obj)); // Output: false (Object is not sealed)

Object.seal(obj);

console.log(Object.isExtensible(obj)); // Output: false (Object is no longer extensible)
console.log(Object.isSealed(obj)); // Output: true (Object is now sealed)

obj.prop3 = "value 3"; // Attempt to add a new property

console.log(obj.prop3); // Output: undefined (Property was not added)

obj.prop1 = "modified value"; // You can still modify existing properties

console.log(obj.prop1); // Output: "modified value"

delete obj.prop2; // Attempt to delete an existing property

console.log(obj.prop2); // Output: "value 2" (Property was not deleted)

// You cannot make existing properties configurable again after sealing
Object.defineProperty(obj, "prop1", {
  configurable: true,
});
// TypeError: Cannot redefine property: prop1
```

### Object.freeze() **STRONGEST ONE**

The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

```js
const obj = {
  prop1: "value 1",
  prop2: "value 2",
};

console.log(Object.isExtensible(obj)); // Output: true (Object is initially extensible)
console.log(Object.isSealed(obj)); // Output: false (Object is not sealed)
console.log(Object.isFrozen(obj)); // Output: false (Object is not frozen)

Object.freeze(obj);

console.log(Object.isExtensible(obj)); // Output: false (Object is no longer extensible)
console.log(Object.isSealed(obj)); // Output: true (Object is now sealed)
console.log(Object.isFrozen(obj)); // Output: true (Object is now frozen)

obj.prop3 = "value 3"; // Attempt to add a new property

console.log(obj.prop3); // Output: undefined (Property was not added)

obj.prop1 = "modified value"; // Attempt to modify an existing property

console.log(obj.prop1); // Output: "value 1" (Property value was not changed)

delete obj.prop2; // Attempt to delete an existing property

console.log(obj.prop2); // Output: "value 2" (Property was not deleted)
```

### `Object.freeze` vs `Object.seal` vs `Object.preventExtensions`

|                            | CREATE | READ | UPDATE | DELETE |
| -------------------------- | :----: | :--: | :----: | :----: |
| `Object.freeze`            |   ✗    |  ✓   |   ✗    |   ✗    |
| `Object.seal`              |   ✗    |  ✓   |   ✓    |   ✗    |
| `Object.preventExtensions` |   ✗    |  ✓   |   ✓    |   ✓    |

## Homework

Homework 4, Deadline 07.08.2023

### Task 1: Object Property Manipulation

Create an object called person with the following properties and values:

```
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
```

Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.

Implement a method called `updateInfo` on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.

Create a new property called `address` on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.

### Task 2: Object Property Enumeration and Deletion

Create a new object called `product` with the following properties and values:

```
name: "Laptop"
price: 1000
quantity: 5
```

Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

Implement a function called `getTotalPrice` that takes the product object as an argument and returns the total price (calculated as price \* quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.

Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.

### Task 3: Object Property Getters and Setters

Create an object called bankAccount with the following properties and values:

```balance: 1000 (default value)```

Use a getter to define a property called `formattedBalance`, which returns the balance with a currency symbol (e.g., "$1000").

Use a setter to define a property called `balance`, which updates the account balance and automatically updates the corresponding `formattedBalance` value.

Implement a method called `transfer` on the` bankAccount` object that takes two `bankAccount` objects and an amount as arguments. The method should transfer the specified amount from the current account to the target account. Ensure that the `balance` and `formattedBalance` properties of both accounts are updated correctly.

### Task 4: Advanced Property Descriptors

Implement a function called createImmutableObject that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.

Use the createImmutableObject function to create an immutable version of the person object from Task 1.

### Task 5: Object Observation

Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.

Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.

### Task 6: Object Deep Cloning

Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.

### Task 7: Object Property Validation

Implement a function called validateObject that takes an object and a validation schema as arguments. The schema should define the required properties, their types, and any additional validation rules. The function should return true if the object matches the schema, and false otherwise. You can choose any schema you want
