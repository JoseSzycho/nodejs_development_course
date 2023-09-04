# Class 13 - Classes and oriented object programming

## Table of content

<!-- TOC -->

- [Class 13 - Classes and oriented object programming](#class-13---classes-and-oriented-object-programming)
    - [Table of content](#table-of-content)
    - [Defining classes](#defining-classes)
    - [Class body](#class-body)
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [Static methods and fields](#static-methods-and-fields)
    - [Fields declarations](#fields-declarations)
    - [Private class features.](#private-class-features)
        - [super](#super)
    - [instance of](#instance-of)
    - [How to name variables without using spaces](#how-to-name-variables-without-using-spaces)
        - [PascalCase UpperCamelCase:](#pascalcase-uppercamelcase)
        - [CamelCase lowerCamelCase:](#camelcase-lowercamelcase)
        - [Snake_case snake_case:](#snake_case-snake_case)
        - [Kebab-case kebab-case:](#kebab-case-kebab-case)
    - [Object-oriented programming](#object-oriented-programming)
    - [Composition of objects](#composition-of-objects)
    - [Singleton](#singleton)
    - [More patter designs](#more-patter-designs)

<!-- /TOC -->

**Classes are a template/schema for creating objects**, they are **NOT entities**. They encapsulate data with code to work on that data. Classes in JS are **built on prototypes** but also have some syntax and semantics that are unique to classes.

An entity typically refers to a data structure or object that represents some real-world entity or concept.

## Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, **a class can be defined in two ways: a class expression or a class declaration**.

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
 constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

## Class body

The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.

The body of a class is executed in strict mode even without the "use strict" directive.

**A class element can be characterized by three aspects:**

- **Kind:** Getter, setter, method, or field
- **Location:** Static or instance
- **Visibility:** Public or private

## Constructor

**The constructor method** is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Methods

Methods are defined on the prototype of each class instance and are shared by all instances.

Methods can be plain functions, async functions, generator functions, or async generator functions.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  // Function generator
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
console.log(square.getSides().next().value); // 10
```

## Static methods and fields

The static keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed configurations, or any other data that doesn't need to be replicated across instances.

```js
// Example
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

```js
// Example, we do not want more than one user to use the library
class User{
    static #MAX = 2;
    static #instances = 0;
    name;
    constructor(name){
        User.#instances++;
        if(User.#instances > User.#MAX){
            throw new Error...
        }
        ...
    }
}
```

## Fields declarations

With the class field declaration syntax, the constructor example can be written as:

```js
class Rectangle {
  /*By declaring fields up-front, class definitions become more self-documenting, and the fields are always present, which help with optimizations.*/
  height;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Class fields are similar to object properties, not variables, so we don't use keywords such as const to declare them. In JavaScript, private features use a special identifier syntax, so modifier keywords like public and private should not be used either.

## Private class features.

The variable is defined with the # symbol.

We only have access to the private field only inside the class.

```js
// private field example

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.name;
  }
}

const myUser = new User("Anna");

myUser.name; // => Anna
myUser.getName(); // => Anna
<!-- TOC -->

- [Class 13 - Classes and oriented object programming](#class-13---classes-and-oriented-object-programming)
    - [Defining classes](#defining-classes)
    - [Class body](#class-body)
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [Static methods and fields](#static-methods-and-fields)
    - [Fields declarations](#fields-declarations)
    - [Private class features.](#private-class-features)
    - [instance of](#instance-of)
    - [How to name variables without using spaces](#how-to-name-variables-without-using-spaces)
        - [PascalCase UpperCamelCase:](#pascalcase-uppercamelcase)
        - [CamelCase lowerCamelCase:](#camelcase-lowercamelcase)
        - [Snake_case snake_case:](#snake_case-snake_case)
        - [Kebab-case kebab-case:](#kebab-case-kebab-case)
    - [Object-oriented programming](#object-oriented-programming)
    - [Composition of objects](#composition-of-objects)
    - [Singleton](#singleton)
    - [More patter designs](#more-patter-designs)

<!-- /TOC -->ton](#singleton)
    - [More patter designs](#more-patter-designs)

<!-- /TOC -->
<!-- /TOC -->
// Syntax
class Child extends Parent {}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    // call the super class constructor and pass in the name parameter
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

If there is a constructor present in the subclass, it needs to first call `super()` before using `this`.

### super()

The `super` keyword can also be used to call corresponding methods of the super class.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## instance of

To know if a class is an instance of another

```js
class ContentWriter extends User{
  ...
}

const writer = new ContentWriter(...);
writer instanceof ContentWriter; // true
writer instanceof User; // true, this might be a problem, because it is also true for the parent class.

writer.constructor === User; // false
writer.constructor === ContentWriter; // true
```

## How to name variables without using spaces

### PascalCase (UpperCamelCase):

- Each word starts with a capital letter.
- No spaces or punctuation between words.
  -Commonly used for class names and type names.

  - **Example:** MyClassDefinition, CalculateTotalAmount, EmployeeRecordManager

### CamelCase (lowerCamelCase):

- Similar to PascalCase but starts with a lowercase letter.
- Commonly used for variable names, function names, and method names in languages like Java and JavaScript.

  - **Example:** calculateTotalAmount, employeeRecordManager, myVariableName

### Snake_case (snake_case):

- Words are separated by underscores (\_).
- All letters are usually lowercase.
- Commonly used for variable names and file names in languages like Python and Ruby.

  - **Example:** my_variable_name, calculate_total_amount, employee_record_manager

### Kebab-case (kebab-case):

- Words are separated by hyphens (-).
- All letters are usually lowercase.
- Commonly used for filenames, URLs, and identifiers in some web development contexts.
  - **Example:** my-variable-name, calculate-total-amount, employee-record-manager

## Object-oriented programming

The four principles are:

1. **Abstraction:** is a way of hiding the implementation details and showing only the functionality to the users.

2. **Inheritance:**

- mechanism that allows a new class (subclass or derived class) to inherit properties and behaviors (attributes and methods) from an existing class (superclass or base class).

- It promotes code reuse and the creation of a hierarchy of related classes.

- Subclasses can extend or override the behavior of their parent classes.

3. **Encapsulation:**

- Encapsulation is the concept of bundling data (attributes or properties) and the methods (functions or procedures) that operate on that data into a single unit called a class.

- It hides the internal details of how an object works and provides a well-defined interface for interacting with the object.

- Access to the object's data is controlled through access modifiers (e.g., public, private, protected) to ensure data integrity and security.

4. **Polymorphism:**

- is a concept of object-oriented programming that allows a field, in this case, an object, to be changed from one form to another, is often achieved through method overriding and interfaces or abstract classes.

- Polymorphism allows objects of different classes to be treated as objects of a common superclass.

- It enables dynamic method invocation, where the specific method that gets executed is determined at runtime based on the actual type of the object.

## Composition of objects

Developers are saying that inheritance is a bad solution. They say that composition is a better solution.
For example, there is a method in the parent class that we do not some children to inheritance, so object composition can solve this.

What this: https://www.youtube.com/watch?v=wfMtDGfHWpA

```js
const addFlyingAbility = (obj) => {
  obj.fly = () => {
    console.log("Zzzziiing");
  };
};

addFlyingAbility(bug1);
```

## Singleton

A Singleton is a **design pattern that restricts the instantiation of a class to a single instance** and provides a global point of access to that instance. This can be useful in situations where you want to ensure that only one instance of a particular class exists throughout your application, such as managing global configuration settings or controlling access to a shared resource.

```js
var Singleton = (function () {
  // Private variables and methods
  var instance;

  function init() {
    // Singleton code here
    return {
      publicMethod: function () {
        console.log("Public method called");
      },
      publicProperty: "I am a public property",
    };
  }

  return {
    // Public method to get the Singleton instance
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

// Usage
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true, they are the same instance

singletonInstance1.publicMethod(); // "Public method called"
console.log(singletonInstance1.publicProperty); // "I am a public property"
```

## More patter designs

https://refactoring.guru/design-patterns/catalog
