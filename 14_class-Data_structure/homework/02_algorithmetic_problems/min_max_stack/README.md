# Max / Min Stack

## Purpose

A max / min stack is a data structure for managing data with a LIFO (last in, first out) principle.

In computing it can be used for:

- Undo and redo algorithms for softwares or text editors
- Logs ordered by temporal time for calls, messages, etc
- Allocation of memory (in a OS for example)
- Execution of functions. JavaScript uses a stack for example.

## Time complexity

- push an element: O(1)
- pop an element: O(1)
- peek an element: O(1)
- maxValue: O(1)
- minValue: O(1)

## Use example

```js
// Importing class
const { MinMaxStack } = require("./MinMaxStack");

// Creating a stack instance
const stack = new MinMaxStack();

// Adding values to stack
stack.push(1);
stack.push(2);
stack.push(3);

// Getting max value
console.log(stack.maxValue()); // 3

// Getting min value
console.log(stack.minValue()); // 1

// Obtaining values from stack
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined

```

# Code documentation

<a name="MinMaxStack"></a>

## MinMaxStack

Create a stack data structure that can give max and min value in stack in O(1).

It works by having two secondaries stack, a minStack which latest element is always the smallest one,
and a maxStack, which bigger element is always the bigger one.

- How minStack works: when pushing a element, we check if this element is smallest than the previous
  one, if so, we push it into the minStack, otherwise, we push the previous element of the minStack
  that continues being the smallest one.

- How maxStack works: when pushing a element, we check if this element is bigger than the previous
  one, if so, we push it into the maxStack, otherwise, we push the previous element of the manStack
  that continues being the biggest one.

For stack explanation, please refer to `../../01_data_structure_implementations/stack/README`

**Kind**: global class

- [MinMaxStack](#MinMaxStack)
  - [.push(el)](#MinMaxStack+push) ⇒
  - [.pop()](#MinMaxStack+pop) ⇒ <code>Number</code>
  - [.peek()](#MinMaxStack+peek) ⇒ <code>Number</code>
  - [.maxValue()](#MinMaxStack+maxValue) ⇒ <code>Number</code>
  - [.minValue()](#MinMaxStack+minValue) ⇒ <code>Number</code>

<a name="MinMaxStack+push"></a>

### minMaxStack.push(el) ⇒

Push a new element into the stack.

**Kind**: instance method of [<code>MinMaxStack</code>](#MinMaxStack)  
**Returns**: Nothing

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| el    | <code>Number</code> | The element |

<a name="MinMaxStack+pop"></a>

### minMaxStack.pop() ⇒ <code>Number</code>

Returns the last element from the stack and remove it from the stack

**Kind**: instance method of [<code>MinMaxStack</code>](#MinMaxStack)  
**Returns**: <code>Number</code> - The last element  
<a name="MinMaxStack+peek"></a>

### minMaxStack.peek() ⇒ <code>Number</code>

Returns the last element from the stack

**Kind**: instance method of [<code>MinMaxStack</code>](#MinMaxStack)  
**Returns**: <code>Number</code> - The last element  
<a name="MinMaxStack+maxValue"></a>

### minMaxStack.maxValue() ⇒ <code>Number</code>

Returns the max value of the stack

**Kind**: instance method of [<code>MinMaxStack</code>](#MinMaxStack)  
**Returns**: <code>Number</code> - The max value  
<a name="MinMaxStack+minValue"></a>

### minMaxStack.minValue() ⇒ <code>Number</code>

Returns the min value of the stack

**Kind**: instance method of [<code>MinMaxStack</code>](#MinMaxStack)  
**Returns**: <code>Number</code> - The min value
