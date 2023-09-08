class Queue {
  #queue;
  #newestIndex;
  #oldestIndex;
  constructor() {
    this.#queue = {};
    this.#newestIndex = -1;
    this.#oldestIndex = 0;
  }
  enqueue(el) {
    this.#newestIndex += 1;
    this.#queue[this.#newestIndex] = el;
  }
  dequeue() {
    if (this.#newestIndex - this.#oldestIndex === -1) return undefined;
    const elToReturn = this.#queue[this.#oldestIndex];
    delete this.#queue[this.#oldestIndex];
    this.#oldestIndex += 1;
    return elToReturn;
  }
  peek() {
    return this.#queue[this.#oldestIndex];
  }
}

module.exports = { Queue };
