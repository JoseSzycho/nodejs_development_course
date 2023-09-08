/**
 * Class that handles a queue. Queue can handle any data type.
 */
class Queue {
  #queue;
  #newestIndex;
  #oldestIndex;
  constructor() {
    // Stores the queue
    this.#queue = {};
    // Starts in this configuration, a difference of newestIndex - oldestIndex
    // of -1 indicates that the queue is empty.
    this.#newestIndex = -1;
    this.#oldestIndex = 0;
  }
  /**
   * Add an element at the beginning of the queue.
   *
   * It works by incrementing the newestIndex and creating a new pair
   * property/element with the newestIndex as the property name.
   * @param {*} el The element
   */
  enqueue(el) {
    this.#newestIndex += 1;
    this.#queue[this.#newestIndex] = el;
  }
  /**
   * Removes and returns the oldest element of the queue
   *
   * It works by checking first if the queue is empty, if so, returns "undefined".
   * Then it stores the oldest element of the queue by acceding the queue object
   * with the oldestIndex. Then the "oldest" property of the queue is deleted,
   * the oldestIndex is increase so it points to a newer element, and then
   * the oldest element is returned.
   * @returns {*} The element
   */
  dequeue() {
    // checks if queue is empty
    if (this.#newestIndex - this.#oldestIndex === -1) return undefined;

    const elToReturn = this.#queue[this.#oldestIndex];
    delete this.#queue[this.#oldestIndex];
    this.#oldestIndex += 1;
    return elToReturn;
  }
  /**
   * Returns the oldest element from the queue.
   *
   * It works be returning the property value of the queue
   * corresponding to the oldestIndex property.
   * @returns
   */
  peek() {
    return this.#queue[this.#oldestIndex];
  }
}

module.exports = { Queue };
