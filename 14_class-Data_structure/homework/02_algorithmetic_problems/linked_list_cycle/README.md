# Floyd's Cycle Detection Algorithm

## Purpose

This algorithm is used for detecting if a linked list have a cycle.

The algorithm consists of traversing the list with two pointers, a slow pointer and a fast pointer.

- The slow pointer starts at the beginning of the linked list
- The fast pointer starts at the next of the slow pointer

The algorithm traverse the list with these two pointers, with the difference that the slow pointer goes one next node at a time, while the fast pointer goes next two node at a time.

**It is demonstrated that if both pointers are equal at some position, that the linked list has a cycle.**

## Time complexity

- hasCycle: O(N)

## Use example

```js
// Importing modules
const {
  Node,
} = require("../../01_data_structure_implementations/linked_list/Node");
const { hasCycle } = require("./hasCycle");

// Creating a linked list with no cycle
const linkedList = new Node(1);
linkedList.nextNode = new Node(2);
linkedList.nextNode.nextNode = new Node(3);

// Creating linked list with a cycle
const cycledList = new Node(1);
cycledList.nextNode = new Node(2);
cycledList.nextNode.nextNode = cycledList;

// Checking if the list have a cycle
hasCycle(linkedList); // false
hasCycle(cycledList); // true
```

<a name="hasCycle"></a>

## hasCycle(node) ⇒ <code>Boolean</code>

Functions checks if a linked list has a cycle.

It works by using Floyd's Cycle Detection Algorithm.

**Kind**: global function  
**Returns**: <code>Boolean</code> - **true** if it has a cycle, **false** if not.

| Param | Type              | Description |
| ----- | ----------------- | ----------- |
| node  | <code>Node</code> | The node    |
