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
      this.#table.get(hashedKey).insertRear(value);
    } else {
      const linkedList = new LinkedList();
      linkedList.insertRear(value);
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

    if (!this.#table.has(hashedKey)) return undefined;

    const value = this.#table.get(hashedKey).getData();

    if (value === undefined) return undefined;

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

    const values = this.#table.get(hashedKey);

    if (values === undefined) return false;

    return values.deleteNode(value);
  }
}

module.exports = { HashTable };
