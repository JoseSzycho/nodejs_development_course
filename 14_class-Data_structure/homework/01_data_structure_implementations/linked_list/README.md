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

<a name="LinkedList"></a>

## LinkedList
Class that handles a linked list structure made with Nodes.

**Kind**: global class  

* [LinkedList](#LinkedList)
    * [.firstNode](#LinkedList+firstNode) ⇒ <code>Node</code>
    * [.insertFront(data)](#LinkedList+insertFront) ⇒ <code>Boolean</code>
    * [.insertRear(data)](#LinkedList+insertRear) ⇒ <code>Boolean</code>
    * [.insertAfter(targetNode, dataToAdd)](#LinkedList+insertAfter) ⇒ <code>Boolean</code>
    * [.searchNode(data)](#LinkedList+searchNode) ⇒ <code>Node</code>
    * [.getData()](#LinkedList+getData) ⇒ <code>Array</code>
    * [.deleteFront()](#LinkedList+deleteFront) ⇒ <code>Boolean</code>
    * [.deleteRear()](#LinkedList+deleteRear) ⇒ <code>Boolean</code>
    * [.deleteNode(data)](#LinkedList+deleteNode) ⇒ <code>Boolean</code>

<a name="LinkedList+firstNode"></a>

### linkedList.firstNode ⇒ <code>Node</code>
Return first node, for testing purposes

**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Node</code> - The node  
<a name="LinkedList+insertFront"></a>

### linkedList.insertFront(data) ⇒ <code>Boolean</code>
Inserts a new node with data in front of the linked list. Returns true.

It works by creating a new Node with the data.
If the linked list is empty, this node is stored as the first node.
If the linked list is not empty, we store the actual first node
of the list at the new Node, and then set the new node as the first element.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | The data |

<a name="LinkedList+insertRear"></a>

### linkedList.insertRear(data) ⇒ <code>Boolean</code>
Inserts a new node with data at the of the list.

It works by creating a new Node with the data.
If the linked list is empty, this node is stored as the first node.

If the list is not empty, we go through the linked list till we find
a node with nextNode = null, this indicates that is the last node.
To store the node, we set this last nextNode property to point the
new node.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | The data |

<a name="LinkedList+insertAfter"></a>

### linkedList.insertAfter(targetNode, dataToAdd) ⇒ <code>Boolean</code>
Inserts a node after a target node position. If target node
is not in the list, returns false, else returns true.

It works by checking if the target node is in the linked list.
If the target node is found, the new node is positioned in the middle
of the targetNode and the targetNode.nextNode.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true if added, false if not  

| Param | Type | Description |
| --- | --- | --- |
| targetNode | <code>\*</code> | The target node |
| dataToAdd | <code>\*</code> | The data to create a node with |

<a name="LinkedList+searchNode"></a>

### linkedList.searchNode(data) ⇒ <code>Node</code>
Search if a node with certain data is stored in the linked list. If found,
the node is returned, if not, returns undefined.

It works by taking the first node, then we go throw the linked listed till
we find a node with a data match, after that we return the node.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Node</code> - - The node, undefined if not found  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | The data |

<a name="LinkedList+getData"></a>

### linkedList.getData() ⇒ <code>Array</code>
Returns the all the nodes data in a array shape. Used for testing purposes. If list is empty, returns undefined.

It works by creating and empty array, then it goes through the list pushing each
data element into the array.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Array</code> - - The data  
<a name="LinkedList+deleteFront"></a>

### linkedList.deleteFront() ⇒ <code>Boolean</code>
Delete the first node in the linked list. Returns true if deleted, false if not (empty list)

It works by checking two scenarios.
First one: if the list is empty, we do nothing
Second one: if there are one or more elements, we make
the first node to point to its nextNode, so the reference is lost.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true if deleted, false if not.  
<a name="LinkedList+deleteRear"></a>

### linkedList.deleteRear() ⇒ <code>Boolean</code>
Delete the last node of the list. Returns true if deleted, false if not

It works by checking for three possibles scenarios.
The first one: if the list is empty, we do nothing.
The second one: if there is only one node, we delete it.
The third one: if there is more than one node, we loop till the
end of the list storing the actual node and the next node. If
the next node is the last one, we make the actualNode.nextNode to be
null, so we lost the reference of the last node.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true if deleted, false if not  
<a name="LinkedList+deleteNode"></a>

### linkedList.deleteNode(data) ⇒ <code>Boolean</code>
Deletes the first node that stores a given data. Returns true if deleted, false if not.

It works by looking for three possible scenarios.
The first one: linked list is empty, we do nothing.
The second one: the node is in the first position, so we delete it.
The third one: the node is in the middle or last position. So we work
looping throw the actual node and the next node. If the next node
matches with the data of the node to delete, we remove the next node
from the list by making the actualNode to point to the nextNode.nextNode.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>Boolean</code> - true if deleted, false if not.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | The data |

