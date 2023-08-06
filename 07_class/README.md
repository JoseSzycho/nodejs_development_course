# Class 7 - Arrays

## What are arrays

In JavaScript, an array is a type of object that stores a collection of values in a specific order and provides methods for accessing, manipulating, and iterating over the elements in the collection.

Arrays are dynamic data structures, which means that they can grow or shrink in size as elements are added or removed. They can also store values of different data types, including numbers, strings, objects, and even other arrays, making them a versatile and powerful tool for managing data in your programs.

![Alt text](./images/image.png)

Arrays acces is vey memory reference. So the variable will be memory reference to the first array value.

The memory used by the array is
`Memory = ITEM_SIZE x count`.
If we want to acces the "n" element of the array, in terms of memory, this element will be located at `array.ponter + ITEM_SIZE * "n-1" `.

### Array pros

- Easy to loop through the elements
- Have many methods for findind elements
- Easy to modify it self
- It finds elements very fast

### Arrays cons

- We have to guess the memory space that is going to use, as must of the times is dinamically created.
- If we push elements, if memory space is not big enough, the engine will create another memory space and copy all the elements, this operations costs performance.
- We can boost performance by reserving the memory space and creating and empty element, but it costs memory space.

## Degining an array

### Array literal

The simplest way to define an array is by using an array literal, which is a comma-separated list of values enclosed in square brackets []:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array.of()

The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

```js
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []
```

### Array.fill()

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

```js
const a = Array(6).fill(1); => [1,1,1,1,1,1]


const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

### Array constructor _NOT RECOMENDED_

```js
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## A property and some methods

### Array: length

The length data property of an Array instance represents the number of elements in that array.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; the extra elements are deleted
```

**The array object observes the length property, and automatically syncs the length value with the array's content. This means:**

- Setting length to a value smaller than the current length truncates the array — elements beyond the new length are deleted.
- Setting any array index (a nonnegative integer smaller than 232) beyond the current length extends the array — the length property is increased to reflect the new highest index.
- Setting length to an invalid value (e.g. a negative number or a non-integer) throws a RangeError exception.

### Array.prototype.every()

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
//Syntax
every(callbackFn);
every(callbackFn, thisArg);

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

The callbackFn must return a true or false.

### Array.prototype.some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```js
// Syntax
some(callbackFn);
some(callbackFn, thisArg);

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

### Array.prototype.map()

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
//Syntax
map(callbackFn);
map(callbackFn, thisArg);

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

### Filter

The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
// Syntax
filter(callbackFn);
filter(callbackFn, thisArg);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

### Array.prototype.reduce()

**BE AWARE WITH THE USE OF ACCUMULATOR DEFAULT THAT IS AN EMPTY OBJECT**

Acumulate array to just one value. It returns the new accumulated value.

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```js
// Syntax

reduce(callbackFn);
reduce(callbackFn, initialValue);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

### Array.prototype.splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
// Syntax
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item0);
splice(start, deleteCount, item0, item1);
splice(start, deleteCount, item0, item1, /* … ,*/ itemN);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.slice()

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

- Negative index counts back from the end of the array — if start < 0, start + array.length is used.

```js
// Syntax
slice();
slice(start);
slice(start, end);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### Array.prototype.push()

The push() method adds the specified elements to the end of an array and returns the new length of the array.

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

### Array.prototype.unshift()

The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

### Array.prototype.pop()

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
// Syntax
pop();

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

### Array.prototype.shift()

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

### Array.prototype.concat()

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
// Syntax
concat();
concat(value0);
concat(value0, value1);
concat(value0, value1, /* … ,*/ valueN);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

### Merge arrays with spread operator

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2];
```

### Array.prototype.indexOf()

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
// Syntax
indexOf(searchElement);
indexOf(searchElement, fromIndex);

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
```

### Array.prototype.lastIndexOf()

The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```js
// Syntax
lastIndexOf(searchElement);
lastIndexOf(searchElement, fromIndex);

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
```

### Array.prototype.find()

The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
// Syntax
find(callbackFn);
find(callbackFn, thisArg);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

### Array.prototype.includes()

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
// Syntax
includes(searchElement);
includes(searchElement, fromIndex);

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

### Array.prototype.toString()

The toString() method returns a string representing the specified array and its elements.

```js
// Syntax
toString();

const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

### rray.prototype.join()

The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
// Syntax
join();
join(separator);

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```

### Array.from()

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
// Syntax
Array.from(arrayLike);
Array.from(arrayLike, mapFn);
Array.from(arrayLike, mapFn, thisArg);

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

### Copy array unique elements using Set

```js
const arr = [1, 2, 5, 5, 7, 7];
const newArr = [...new Set(arr)];
```

### Best way for clearing an array

```js
const a = [2, 2, 2, 2, 3, 4, 5, 5, 5, 5];
a.length = 0;
a; // => []
```

### Array.prototype.forEach()

The forEach() method executes a provided function once for each array element.

Just for loop through array and get some result. It doesnt return o modify anything

```js
// Syntax
forEach(callbackFn);
forEach(callbackFn, thisArg);

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Ways to iterate over an array

### Array.prototype.forEach()

Explained above.

With the rest below we can use continue; break;

### for...of

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

```js
// Syntax
for (variable of iterable) statement;

const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

### for...in

The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

```js
// Syntax
for (variable in object) statement;

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

```js
// Syntax
for (initialization; condition; afterthought) statement;

let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
```

### while

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

```js
// Syntax
while (condition) statement;

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3
```

### do...while

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

```js
// Syntax
do statement;
while (condition);

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

### Array.prototype[@@iterator]

The [@@iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.

```js
// Syntax
array[Symbol.iterator]();

const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
console.log(arrIter.next().value); // undefined

arrIter.next().done; // false, true if there are not more elements
```

### Good practices for array iterators

- **forEach** => usual for arrays
- **for ... in** => better for objects
- **for ... of** => if you want to use break
- **for** => if we have to thandle current state
- **do ... while** => for running one time with out condition
- **while** => for everything else


## Homework

## Task 1: Advanced Array Filtering

1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.

2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.

## Task 2: Array Chunking

1. Create a function called `chunkArray` that takes an array and a chunk size as arguments. The `chunkArray` function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.

2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.

## Task 3: Array Shuffling

1. Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.

2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.

## Task 4: Array Intersection and Union

1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.

2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.

## Task 5: Array Performance Analysis

1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. The `measureArrayPerformance` function should execute the provided function with the given array as input and measure the execution time.

2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods (`map`, `filter`, `reduce`, etc.) against your custom array manipulation functions.