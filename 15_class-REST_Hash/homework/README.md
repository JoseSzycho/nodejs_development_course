# Hash Functions and Hash Tables

## Implementing a custom Hash function

Please go to `./hash.js` or [click here](./hash.js) to see the code implementation.

For more explanation about the algorithm please see the `Code documentation` section or the code it self.

### Time complexity

- hash(`<key>`): O(N), being `N` the key length.

### Testing

Please go to `./tests/hash/hash.test.js` or [click here](./tests/hash/hash.test.js) to see the test implementation and collision checking.

## Implementing a custom Hash Table

Please go to `./HashTable.js` or [click here](./HashTable.js) to see the code implementation.

For more explanation about the algorithm please see the `Code documentation` section or the code it self.

### Time complexity

- insert(`<key>`, `<value>`): with out taking in count the complexity of hashing the key.

  - with no previous collision: O(1)
  - with previous collision: O(N), being `N` the number of previous collisions.

- get(`<key>`): with out taking in count the complexity of hashing the key.

  - with no previous collision: O(1)
  - with previous collision: O(N), being `N` the number of previous collisions.

- deleteByKey(`<key>`): O(1), with out taking in count the complexity of hashing the key.

- deleteByKeyValue(`<key>`, `<value>`): with out taking in count the complexity of hashing the key.

  - with no previous collision: O(1)
  - with previous collision: O(N), being `N` the number of previous collisions.

# Code documentation

For more information and code comments, please go to each `.js` file.

## Classes

<dl>
<dt><a href="#HashTable">HashTable</a></dt>
<dd><p>Class that creates and manages a hash table.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#hash">hash(key)</a> ⇒ <code>BigInt</code></dt>
<dd><p>Returns the hashed value of a given key.</p>
<p>The algorithm works the next way:</p>
<ul>
<li><strong>First step:</strong> loops throw all of the chars of the key. For each
iteration, it concatenates the previous hashedKey with the quadruple
of the ASCII character code of the char, in order to add some avalanche
effect.</li>
<li><strong>Second step:</strong> reverses the hashedKey to add more randomness to the hashed
value, as the latest number are more prone to change faster, we move them
to the beginning.</li>
<li><strong>Third step:</strong> with return the hashedKey mod a big number, for adding a
a upper limit.</li>
</ul>
</dd>
</dl>

<a name="HashTable"></a>

## HashTable

Class that creates and manages a hash table.

**Kind**: global class

- [HashTable](#HashTable)
  - [.insert(key, value)](#HashTable+insert) ⇒ <code>Boolean</code>
  - [.get(key)](#HashTable+get) ⇒ <code>\*</code> \| <code>Array</code>
  - [.deleteByKey(key)](#HashTable+deleteByKey) ⇒ <code>Boolean</code>
  - [.deleteByKeyValue(key, value)](#HashTable+deleteByKeyValue) ⇒ <code>Boolean</code>

<a name="HashTable+insert"></a>

### hashTable.insert(key, value) ⇒ <code>Boolean</code>

Inserts a pair of key-value in the hash table.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: <code>Boolean</code> - **true**

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>String</code> | The key     |
| value | <code>\*</code>     | The value   |

<a name="HashTable+get"></a>

### hashTable.get(key) ⇒ <code>\*</code> \| <code>Array</code>

Gets the value/values stored in a key.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: <code>\*</code> \| <code>Array</code> - The value, an array if multiple values.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>String</code> | The key     |

<a name="HashTable+deleteByKey"></a>

### hashTable.deleteByKey(key) ⇒ <code>Boolean</code>

Delete the value / values stored in a key.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: <code>Boolean</code> - **true** if deleted, **false** if key is not stored.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>String</code> | The key     |

<a name="HashTable+deleteByKeyValue"></a>

### hashTable.deleteByKeyValue(key, value) ⇒ <code>Boolean</code>

Delete a certain value stored in a key.

**Kind**: instance method of [<code>HashTable</code>](#HashTable)  
**Returns**: <code>Boolean</code> - **true** if deleted, **false** if key-value is not stored.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>String</code> | The key     |
| value | <code>\*</code>     | The value   |

<a name="hash"></a>

## hash(key) ⇒ <code>BigInt</code>

Returns the hashed value of a given key.

The algorithm works the next way:

- **First step:** loops throw all of the chars of the key. For each
  iteration, it concatenates the previous hashedKey with the quadruple
  of the ASCII character code of the char, in order to add some avalanche
  effect.
- **Second step:** reverses the hashedKey to add more randomness to the hashed
  value, as the latest number are more prone to change faster, we move them
  to the beginning.
- **Third step:** with return the hashedKey mod a big number, for adding a
  a upper limit.

**Kind**: global function  
**Returns**: <code>BigInt</code> - The hashed key

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>String</code> | The key     |
