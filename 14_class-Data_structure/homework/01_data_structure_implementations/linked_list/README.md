# Linked list

## Purpose

Linked list is a linear data structure for managing data that allows data to be inserted/deleted/searched in different positions. It also provides a low time complexity for performing this actions.

In computing it can used for:

- Algorithms that need low time complexity for performing insertions / deletions.
- Dynamic memory allocation, as it does not necessary uses continuos memory space.
- Efficient use of space, as it only needs the space used for the node, it does not uses extra space as array for example, when they have empty indexes.

## Time complexity

- insertFront: O(1)
- insertRear: O(N)
- insertAfter: O(N)
- deleteFront: O(1)
- deleteRear: O(N)
- deleteNode: O(N)
- searchNode: O(N)
- getData: O(N)

## Use example

```js
// Importing class
const { LinkedList } = require("./LinkedList.js");

// Creating linked list instance
const linkedList = new LinkedList();

// Adding values to the linked list
linkedList.insertFront(1); // Inserts node 1 at the beginning
linkedList.insertRear(3); // Inserts node 3 at the end
linkedList.insertAfter(1, 2); // Inserts node 2 after node 1

// Searching a node
console.log(linkedList.searchNode(2)); // Node { data: 2 }

// Getting data from the linked list
console.log(linkedList.getData()); // [1, 2, 3]

// Deleting nodes from the linked list
linkedList.deleteFront(); // Deletes first node
linkedList.deleteRear(); // Delete last node
linkedList.deleteNode(2); // Delete first node that contains a given data

// Getting data from the linked list
console.log(linkedList.getData()); // []
```

# Code documentation

<a name="Node"></a>

## Node

to another node, so a linked list can be created. to point

**Kind**: global class

- [Node](#Node)
  - [new Node(data)](#new_Node_new)
  - [.nextNode](#Node+nextNode)
  - [.nextNode](#Node+nextNode)

<a name="new_Node_new"></a>

### new Node(data)

Initialize the node with certain data.

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | <code>\*</code> | The data    |

<a name="Node+nextNode"></a>

### node.nextNode

Returns the #nextNode property

**Kind**: instance property of [<code>Node</code>](#Node)
<a name="Node+nextNode"></a>

### node.nextNode

Sets #nextNode with a new Node / null after a a input check

**Kind**: instance property of [<code>Node</code>](#Node)

| Param | Type                       | Description |
| ----- | -------------------------- | ----------- |
| node  | [<code>Node</code>](#Node) | The Node    |

<a name="LinkedList"></a>

## LinkedList

Class that handles a linked list structure made with Nodes.

**Kind**: global class

- [LinkedList](#LinkedList)
  - [.firstNode](#LinkedList+firstNode)
  - [.insertFront(data)](#LinkedList+insertFront)
  - [.insertRear(data)](#LinkedList+insertRear)
  - [.insertAfter(targetNode, dataToAdd)](#LinkedList+insertAfter)
  - [.searchNode(data)](#LinkedList+searchNode) ⇒ <code>Node</code>
  - [.getData()](#LinkedList+getData) ⇒ <code>Array</code>
  - [.deleteFront()](#LinkedList+deleteFront)
  - [.deleteRear()](#LinkedList+deleteRear)
  - [.deleteNode(data)](#LinkedList+deleteNode)

<a name="LinkedList+firstNode"></a>

### linkedList.firstNode

Return first node, for testing purposes

**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)
<a name="LinkedList+insertFront"></a>

### linkedList.insertFront(data)

of the list at the new Node, and then set the new node as the first element.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | <code>\*</code> | The data    |

<a name="LinkedList+insertRear"></a>

### linkedList.insertRear(data)

new node.the node, we set this last nextNode property to point thend

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | <code>\*</code> | The data    |

<a name="LinkedList+insertAfter"></a>

### linkedList.insertAfter(targetNode, dataToAdd)

of the targetNode and the targetNode.nextNode.ositioned in the middle

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param      | Type            | Description                    |
| ---------- | --------------- | ------------------------------ |
| targetNode | <code>\*</code> | The target node                |
| dataToAdd  | <code>\*</code> | The data to create a node with |

<a name="LinkedList+searchNode"></a>

### linkedList.searchNode(data) ⇒ <code>Node</code>

we find a node with a data match, after that we return the node.isted till

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)
**Returns**: <code>Node</code> - - The node

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | <code>\*</code> | The data    |

<a name="LinkedList+getData"></a>

### linkedList.getData() ⇒ <code>Array</code>

data element into the array.ty array, then it goes through the list pushing each

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)
**Returns**: <code>Array</code> - - The data
<a name="LinkedList+deleteFront"></a>

### linkedList.deleteFront()

the first node to point to its nextNode, so the reference is lost.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)
<a name="LinkedList+deleteRear"></a>

### linkedList.deleteRear()

null, so we lost the reference of the last node.lNode.nextNode to be

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)
<a name="LinkedList+deleteNode"></a>

### linkedList.deleteNode(data)

from the list by making the actualNode to point to the nextNode.nextNode.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| data  | <code>\*</code> | The data    |
