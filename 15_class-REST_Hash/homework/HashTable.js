const linkedListPath =
  "../../14_class-Data_structure/homework/01_data_structure_implementations/linked_list/LinkedList";
const { hash } = require("./hash");
const { LinkedList } = require(linkedListPath);

/**
 * Class that creates and manages a hash table.
 */
class HashTable {
  #table;
  constructor() {
    // Stores the hash table
    this.#table = new Map();
  }
  /**
   * Returns the hashed value of a key.
   * @param {String} key The key
   * @returns {BigInt} The hashed value
   * @private
   */
  #hash(key) {
    return hash(key);
  }
  /**
   * Inserts a pair of key-value in the hash table.
   * @param {String} key The key
   * @param {*} value The value
   * @returns {Boolean} __true__
   */
  insert(key, value) {
    const hashedKey = this.#hash(key);

    if (this.#table.has(hashedKey)) {
      // If hashedKey already stored, use chaining for
      // avoiding collision. Inserts value at end of queue
      this.#table.get(hashedKey).insertRear(value);
    } else {
      // If hashKey is not stored
      // Create new linked list for chaining collision avoidance
      const linkedList = new LinkedList();
      // Insert value into the linked list
      linkedList.insertRear(value);
      // Store linked list at the hashedKey value in hash table
      this.#table.set(hashedKey, linkedList);
    }

    return true;
  }

  /**
   * Gets the value/values stored in a key.
   * @param {String} key The key
   * @returns {( * | Array)} The value, an array if multiple values.
   */
  get(key) {
    const hashedKey = this.#hash(key);

    // If hashedKey is not in the hash table
    if (!this.#table.has(hashedKey)) return undefined;

    // Getting value/s using .getData() method from linked list.
    const value = this.#table.get(hashedKey).getData();

    // If the linked list do not have a stored value
    if (value === undefined) return undefined;

    // Returning values

    if (value.length === 1) {
      return value[0];
    }

    return [...value];
  }

  /**
   * Delete the value / values  stored in a key.
   * @param {String} key The key
   * @returns {Boolean} __true__ if deleted, __false__ if key is not stored.
   */
  deleteByKey(key) {
    const hashedKey = this.#hash(key);
    return this.#table.delete(hashedKey);
  }

  /**
   * Delete a certain value stored in a key.
   * @param {String} key The key
   * @param {*} value The value
   * @returns {Boolean} __true__ if deleted, __false__ if key-value is not stored.
   */
  deleteByKeyValue(key, value) {
    const hashedKey = this.#hash(key);

    // Getting values from table
    const values = this.#table.get(hashedKey);

    // If there are no values stores in the hashedKey
    if (values === undefined) return false;

    // Deleting value using the linked list deleteNode() method
    return values.deleteNode(value);
  }
}

module.exports = { HashTable };
