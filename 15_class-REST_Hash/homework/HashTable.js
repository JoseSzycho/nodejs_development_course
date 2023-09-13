const linkedListPath =
  "../../14_class-Data_structure/homework/01_data_structure_implementations/linked_list/LinkedList";
const { hash } = require("./hash");
const { LinkedList } = require(linkedListPath);

class HashTable {
  #table;
  constructor() {
    this.#table = new Map();
  }

  #hash(key) {
    return hash(key);
  }

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

  deleteByKey(key) {
    const hashedKey = this.#hash(key);
    return this.#table.delete(hashedKey);
  }

  deleteByKeyValue(key, value) {
    const hashedKey = this.#hash(key);

    const values = this.#table.get(hashedKey);

    if (values === undefined) return false;

    return values.deleteNode(value);
  }
}

module.exports = { HashTable };
