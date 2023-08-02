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
 console.log(Array.of('foo', 2, 'bar', true));
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