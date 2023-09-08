
# Class 13 - Classes and oriented object programming

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
user.#name; // =>  error
```

## Inheritance

It works equally as prototype inheritance.

### extends

The `extends` keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).

```js
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

## Homework Assignment: Building an Online Bookstore

### Task

Your task is to design and implement an object-oriented program in JavaScript to simulate the functioning of an online bookstore. This assignment will test your understanding of classes, encapsulation, inheritance, and polymorphism.

### Instructions

### Part 1: Class Design

1. **Book Class**: Create a class called `Book` to represent individual books. Each book should have properties like title, author, ISBN, price, and availability.
2. **User Class**: Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID.
3. **Cart Class**: Design a class called `Cart` to simulate a shopping cart. It should have methods to add books, remove books, and calculate the total price of the books in the cart.
4. **Order Class**: Create an `Order` class to represent a user's order. It should include information about the user, the books ordered, and the total price.

### Part 2: Implementation

1. **Create Objects**: Instantiate multiple `Book` objects, representing different books available in the bookstore. Also, create a few `User` objects.
2. **Add Books to Cart**: Simulate users adding books to their cart by creating instances of the `Cart` class and using its methods.
3. **Place Orders**: Implement the process of placing an order. Users should be able to create instances of the `Order` class, specifying the books they want to purchase.

### Part 3: Demonstration

1. **Create a Scenario**: Design a scenario where users browse books, add them to their carts, and place orders. Simulate interactions between users, carts, and orders.
2. **Interaction**: Demonstrate how objects of different classes interact with each other. For example, a user interacts with a cart, and a cart interacts with orders.
3. **Polymorphism**: Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly when users add them to the cart.

### Part 4: Documentation

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain the purpose of each class, method, and property. Describe the interaction between different objects and how encapsulation is maintained.

### Submission

Submit your JavaScript program along with detailed documentation and comments that explain your code. Ensure that your code is well-structured and adheres to best practices in object-oriented programming.

### Example

Here's a simplified example structure to give you an idea of what your code might look like:

```jsx
class Book {
  constructor(title, author, isbn, price, availability) {
    // Properties and methods...
  }
}

class User {
  constructor(name, email, userId) {
    // Properties and methods...
  }
}

class Cart {
  constructor(user) {
    // Properties and methods...
  }
}

class Order {
  constructor(user, books) {
    // Properties and methods...
  }
}

// Instantiate objects and simulate bookstore interactions...
```

### Bonus (Optional)

- Implement additional features such as searching for books, applying discounts, handling payments, or integrating a database to store book and user information.
