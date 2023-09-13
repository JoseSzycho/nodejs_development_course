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
  }

  get(key) {
    const hashedKey = this.#hash(key);

    const value = this.#table.get(hashedKey).getData();

    if (value === undefined) return undefined;

    if (value.length === 1) {
      return value[0];
    }

    return [...value];
  }
}

const table = new HashTable();

table.insert("a", 2);
table.insert("b", 2);
table.insert("b", 3);
table.insert("b", 4);
console.log(table.get("a"))
