# Binary Search Tree

<a name="isBinarySearchTree"></a>

## isBinarySearchTree(node) ⇒ <code>Boolean</code>

Checks if a binary tree fulfill the BST condition given a tree root.

**Returns true if it fulfills, false if not.**

It works be traversing the tree using recursion and comparing the actual
node.data with the node.left.data and the node.right.data.

If the node.left.data or the node.left.right data do not full fill the
BST property, we returns false, else we continue traversing the tree
till we reach a null node, this mean that till this moment the BST
condition was fulfilled, so a true is returned.

**Kind**: global function  
**Returns**: <code>Boolean</code> - **true** if is BST, **false** if not BST

| Param | Type              | Description   |
| ----- | ----------------- | ------------- |
| node  | <code>Node</code> | The tree root |

## Use example

```js
// Importing required modules
const {
  Node,
} = require("../../01_data_structure_implementations/binary_tree/Node");
const { isBinarySearchTree } = require("./isBinarySearchTree");

// Creating a tree
const node = new Node(20); // Tree root
node.left = new Node(10);
node.left.right = new Node(15);
node.left.right.left = new Node(14);
node.left.right.right = new Node(16);
node.left.left = new Node(5);
node.left.left.left = new Node(4);
node.left.left.right = new Node(6);

// Checking if it satisfy the BST condition
isBinarySearchTree(node); // true
```
