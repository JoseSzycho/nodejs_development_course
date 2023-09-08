# Stack

## Purpose

A stack is a data structure for managing data with a LIFO (last in, first out) principle.

In computing it can be used for:

- Undo and redo algorithms for softwares or text editors
- Logs ordered by temporal time for calls, messages, etc
- Allocation of memory (in a OS for example)
- Execution of functions. JavaScript uses a stack for example.

## Time complexity

- push an element: O(1)
- pop an element: O(1)
- peek an element: O(1)

# Code documentation

## Stack

Class that handles a stack. Stack can handle any data type.

**Kind**: global class

- [Stack](#Stack)
  - [.push(el)](#Stack+push)
  - [.pop()](#Stack+pop) ⇒ <code>\*</code>
  - [.peek()](#Stack+peek) ⇒ <code>\*</code>

<a name="Stack+push"></a>

### stack.push(el)

Add an element at the top of the stack.

It works by incrementing the index and creating a new pair
property/element with this index at the stack object.

**Kind**: instance method of [<code>Stack</code>](#Stack)

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| el    | <code>\*</code> | The element |

<a name="Stack+pop"></a>

### stack.pop() ⇒ <code>\*</code>

Removes last element from the stack and returns it.

It works by storing the last property value of the stack
using the stored index. Then the property es deleted and the
index is decreased. The index cannot be less than -1 so it can
be prepared for storing the first stack element at index 0
when pushing it if the stack is empty.

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: <code>\*</code> - The element  
<a name="Stack+peek"></a>

### stack.peek() ⇒ <code>\*</code>

Returns the last element from the stack.

It works by returning the property value corresponding
to current stack index.

**Kind**: instance method of [<code>Stack</code>](#Stack)  
**Returns**: <code>\*</code> - The element
