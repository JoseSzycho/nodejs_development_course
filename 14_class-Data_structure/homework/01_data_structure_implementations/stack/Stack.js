/**
 * Class that handles a stack. Stack can handle any data type.
 */
class Stack {
  #index;
  #stack;
  constructor() {
    // Stores the stack
    this.#stack = {};
    // Start in -1 so the index always point to last element,
    // as it increases when a element is pushed.
    this.#index = -1; 
  }
  /**
   * Add an element at the top of the stack
   * @param {*} el The element
   */
  push(el) {
    this.#index += 1;
    this.#stack[this.#index] = el;
  }
  /**
   * Removes last element from the stack and returns it
   * @returns {*} The element
   */
  pop() {
    const lastEl = this.#stack[this.#index];
    delete this.#stack[this.#index];
    if (this.#index != -1) this.#index -= 1;
    return lastEl;
  }
  /**
   * Returns the last element from the stack
   * @returns {*} The element
   */
  peek() {
    return this.#stack[this.#index];
  }
}

module.exports = { Stack };
