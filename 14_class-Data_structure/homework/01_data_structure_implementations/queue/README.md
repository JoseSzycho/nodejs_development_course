# Queue

## Purpose

Queue is a data structure for managing data with a FIFO (first in, first out) principle. It is efficient for uses cases where it is necessary to pick the oldest element with a low time complexity.

In computing it can be used for:
- Scheduling tasks: the oldest task is the first one in executing
- Input buffer for devices: a keyboard for example
- Uploading files in a sequential order.

## Time complexity

- enqueue an element: O(1)
- dequeue an element: O(1)
- peek an element: O(1)

## Use example

```js
// Importing class
const { Queue } = require("./Queue");

// Creating queue instance
queue = new Queue();

// Adding values to queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// Obtaining values from queue
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // undefined
```

# Code documentation

<a name="Queue"></a>

## Queue
Class that handles a queue. Queue can handle any data type.

**Kind**: global class

* [Queue](#Queue)
    * [.enqueue(el)](#Queue+enqueue)
    * [.dequeue()](#Queue+dequeue) ⇒ <code>\*</code>
    * [.peek()](#Queue+peek) ⇒ <code>\*</code>

<a name="Queue+enqueue"></a>

### queue.enqueue(el)
Add an element at the beginning of the queue.

It works by incrementing the newestIndex and creating a new pair
property/element with the newestIndex as the property name.

**Kind**: instance method of [<code>Queue</code>](#Queue)

| Param | Type | Description |
| --- | --- | --- |
| el | <code>\*</code> | The element |

<a name="Queue+dequeue"></a>

### queue.dequeue() ⇒ <code>\*</code>
Removes and returns the oldest element of the queue

It works by checking first if the queue is empty, if so, returns "undefined".
Then it stores the oldest element of the queue by acceding the queue object
with the oldestIndex. Then the "oldest" property of the queue is deleted,
the oldestIndex is increase so it points to a newer element, and then
the oldest element is returned.

**Kind**: instance method of [<code>Queue</code>](#Queue)
**Returns**: <code>\*</code> - The element
<a name="Queue+peek"></a>

### queue.peek() ⇒ <code>\*</code>
Returns the oldest element from the queue.

It works be returning the property value of the queue
corresponding to the oldestIndex property.

**Kind**: instance method of [<code>Queue</code>](#Queue)
**Returns**: <code>\*</code> - The element