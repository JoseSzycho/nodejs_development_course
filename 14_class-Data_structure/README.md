# Data structure

## Arrays

- Is a one field of memory, not separated, not linked.

- All elements are the same size

### It should have next methods all languages

- Get: get a element by index. In js a[i]
- Insert: insert a element by index. In js a[i] =
- Delete: some element by index
- Size: return size of array. In js: a.length

## Stack

- Have a first in last out principle

**To check in O(1) which element is the max.**

We can have to stack, a stack and max_stack

In first item we push the element to both stacks.
With other elements, we add element to stack but only add to max_Stack if element is bigger, if not, we add again the same max element. If the element is bigger, we add it to both stacks.

![Alt text](image.png)

### It should have next operations

- Push
- Pop
- isEmpty
- Top: link to the link of top element

## Queue

- It follows the principle first in, first out.

### It should next operations

- Enqueue: add item
- Dequeue: removes item
- isEmpty
- Top: get start of the queue

## Linked list

- Like an array, but not sharing the same memory space

Each element have:

- Data
- Pointer to next element

The last element pointer is `null`.

It can be:

- One way: have pointer to next element
- Two way: have pointer to next and previous element

```js
class Node {
  constructor(data, pointer) {
    this.data = data;
    nextPointer = pointer;
  }
}
```

### Goof for

Is good for example, if is used to add some data, in case for example the linked tree is in order. So we split the linked tree and add the value in the middle.

![Alt text](image-1.png)

![Alt text](image-2.png)

### Problems

The last element point another element and makes a infinite loop.

![Alt text](image-3.png)

#### Solve the problem

**Easy but not good method**

Linked list do not have counters.

- Store the pointer of the top
- Store the count of added elements
- When adding elements or doing something, count the times we moved elements, if greater than the total count, we are in problem.

**Better method. Floid method**

- Create two pointers, one that is fast and a slower one. The both start at the beginning.
- Fast pointer moves two elements
- Slow pointer moves ones element
- If the pointers met, it have a loop.

## Graph

Popular data structure.

- Set of vortex and edges
- Connected by them selves
- It can be oriented / not oriented

**Not oriented example**
Because edges do not have arrows, you can move from node to node in both directions.
![Alt text](image-4.png)

**Oriented**
They have arrows to define in which way you move.

### Graphs algorithms

Do not use recursion in graph.
Use queue, stack and set.

- Depth first search: go deep till a node do not have a child, the go one step back a start again.
- Breadth first search. go level by level

## Trees

Like a graph but with herarchy.

- Have a root
- Have nodes

![Alt text](image-5.png)

It starts by the root. In this case: 1.

- Parent node: a node that have links to other nodes
- Child node: a node hat have parents
- Leaf: a child which is not parent.
- Siblings: children of same parent.

**On this example**

- Root: 1
- Parent: 1 3
- Child: 2 3 4 6 7
- Leaf: 2 4 6 7
- Siblings 1: 2 3 4
- Siblings 2: 6 7

## Heap

Read at home
