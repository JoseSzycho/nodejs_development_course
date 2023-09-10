# Binary tree

## Purpose

Binary tree is a data structure that store the data in hierarchical order. This makes the structure being efficient for searching, inserting, deleting data.

In computing it can be used for:

- Searching, adding, deleting data in a efficient way
- File system to represent directory structures
- Games, for example where you have a tree to add some points of powers

## Time complexity

- insertNode:
  - average: O(log N)
  - worst: O(N)
- findNode:
  - average: log(N)
  - worst: O(N)
- inOrder: O(N)
- preOrder: O(N)
- postOrder: O(N)

## Use example

```js
// Importing class
const { Tree } = require("./Tree");

// Creating binary tree instance
const tree = new Tree();

// Inserting nodes
const data = [5, 10, 7, 12, 8, 2, 1, 3, 4, 9];
data.forEach((el) => {
  tree.insertNode(el); // Node added
});

// Finding nodes
tree.findNode(12); // <true> console: Node found.
tree.findNode(99); // <false> console: Node not found.

// Getting nodes data in different traversing ways
tree.inOrder(); // [1, 2, 3, 4, 5, 7, 8, 9, 10, 12];
tree.preOrder(); // [5, 2, 1, 3, 4, 10, 7, 8, 9, 12];
tree.postOrder(); // [1, 4, 3, 2, 9, 8, 7, 12, 10, 5];
```

# Code documentation

## Classes

<dl>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Class that handles a binary tree</p>
</dd>
<dt><a href="#Node">Node</a></dt>
<dd><p>Class that represents a node</p>
</dd>
</dl>

<a name="Tree"></a>

## Tree

Class that handles a binary tree

**Kind**: global class

- [Tree](#Tree)
  - [.insertNode(value, node)](#Tree+insertNode) ⇒ <code>nothing</code>
  - [.findNode(value, node)](#Tree+findNode) ⇒ <code>Boolean</code>
  - [.inOrder(node, data)](#Tree+inOrder) ⇒ <code>Array</code>
  - [.preOrder(node, data)](#Tree+preOrder) ⇒ <code>Array</code>
  - [.postOrder(node, data)](#Tree+postOrder) ⇒ <code>Array</code>

<a name="Tree+insertNode"></a>

### tree.insertNode(value, node) ⇒ <code>nothing</code>

Inserts a tree to the binary tree

It works by following the next steps.

- First step: If the tree is empty, sets the node as the tree root.
- Second step: Checks if the data is already in the tree, if so, it exits the method.
- Third step: checks if can add the values.
  - If value < node.data, adds new node to the left pointer
  - If value > node.data; adds new node to the right pointer
- Fourth step, if here, the node have not being added, we need to use recursion in order
  to get to the next nodes.
  - If value < node.data, it gets into the left child
  - If vale > node.data, it gets into the right child

**Kind**: instance method of [<code>Tree</code>](#Tree)

| Param | Type                       | Description      |
| ----- | -------------------------- | ---------------- |
| value | <code>Number</code>        | The value        |
| node  | [<code>Node</code>](#Node) | For internal use |

<a name="Tree+findNode"></a>

### tree.findNode(value, node) ⇒ <code>Boolean</code>

Find if a node with a certain value is in the binary try, if found, returns true, if not, false.

It works by following the next steps:

- First step: if binary tree is empty, returns false.
- Second step: if the actual node.data is the value, returns true.
- Third step: if here, the node have not be found. So we use recursion
  to go to the next nodes.
  - If value > actual node.data, we visit the right node pointer
  - If value < actual node.data, we visit the left node pointer
- Fourth step: if here, the node have not being found, returns false

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: <code>Boolean</code> - - The result. <true> if found, <false> if not.

| Param | Type                       | Description      |
| ----- | -------------------------- | ---------------- |
| value | <code>Number</code>        | The value        |
| node  | [<code>Node</code>](#Node) | For internal use |

<a name="Tree+inOrder"></a>

### tree.inOrder(node, data) ⇒ <code>Array</code>

Returns an array containing all the nodes data traversing the binary
tree in order.

It works by following the next steps:

- First step: checks for exit condition, we reached an empty leave.
- Second step: visit the left branch recursively till we reach an empty leave.
- Third step: store the node data in the array
- Fourth step: visit the right pointer and repeats from step 1.
- Fifth step: returns the data

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: <code>Array</code> - The data

| Param | Type                       | Description  |
| ----- | -------------------------- | ------------ |
| node  | [<code>Node</code>](#Node) | Internal use |
| data  | <code>Array</code>         | Internal use |

<a name="Tree+preOrder"></a>

### tree.preOrder(node, data) ⇒ <code>Array</code>

Returns an array containing all the nodes data traversing the binary
tree in pre order.

It works by following the next steps:

- First step: checks for exit condition, we reached an empty leave.
- Second step: store the node data in the array
- Third step: visit the left pointer and repeat step 1.
- Fourth step: visit the right pointer and repeats step 1.
- Fifth step: returns the data

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: <code>Array</code> - The data

| Param | Type                       | Description  |
| ----- | -------------------------- | ------------ |
| node  | [<code>Node</code>](#Node) | Internal use |
| data  | <code>Array</code>         | Internal use |

<a name="Tree+postOrder"></a>

### tree.postOrder(node, data) ⇒ <code>Array</code>

Returns an array containing all the nodes data traversing the binary
tree in post order.

It works by following the next steps:

- First step: checks for exit condition, we reached an empty leave.
- Second step: visit the left branch recursively till we reach an empty leave.
- Third step: visit the right branch recursively till we reach an empty leave.
- Fourth step: store the node data in the array. Repeat from step 1.
- Fifth step: returns the data

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: <code>Array</code> - The data

| Param | Type                       | Description  |
| ----- | -------------------------- | ------------ |
| node  | [<code>Node</code>](#Node) | Internal use |
| data  | <code>Array</code>         | Internal use |

<a name="Node"></a>

## Node

Class that represents a node

**Kind**: global class

- [Node](#Node)
  - [new Node(data)](#new_Node_new)
  - [.data](#Node+data) ⇒ <code>Number</code>
  - [.left](#Node+left) ⇒ [<code>Node</code>](#Node)
  - [.right](#Node+right) ⇒ [<code>Node</code>](#Node)
  - [.left](#Node+left)
  - [.right](#Node+right)

<a name="new_Node_new"></a>

### new Node(data)

Sets data of the new data after a validation.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| data  | <code>Number</code> | The data    |

<a name="Node+data"></a>

### node.data ⇒ <code>Number</code>

Returns node data

**Kind**: instance property of [<code>Node</code>](#Node)  
**Returns**: <code>Number</code> - The data  
<a name="Node+left"></a>

### node.left ⇒ [<code>Node</code>](#Node)

Returns left pointer

**Kind**: instance property of [<code>Node</code>](#Node)  
**Returns**: [<code>Node</code>](#Node) - The pointer  
<a name="Node+right"></a>

### node.right ⇒ [<code>Node</code>](#Node)

Returns the right pointer

**Kind**: instance property of [<code>Node</code>](#Node)  
**Returns**: [<code>Node</code>](#Node) - The pointer  
<a name="Node+left"></a>

### node.left

Sets left pointer after a validation

**Kind**: instance property of [<code>Node</code>](#Node)

| Param | Type                       | Description |
| ----- | -------------------------- | ----------- |
| node  | [<code>Node</code>](#Node) | The node    |

<a name="Node+right"></a>

### node.right

Sets right pointer after a validation

**Kind**: instance property of [<code>Node</code>](#Node)

| Param | Type                       | Description |
| ----- | -------------------------- | ----------- |
| node  | [<code>Node</code>](#Node) | The node    |
