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
   * Add an element at the top of the stack.
   *
   * It works by incrementing the index and creating a new pair
   * property/element with this index at the stack object.
   * @param {*} el The element
   */
  push(el) {
    this.#index += 1;
    this.#stack[this.#index] = el;
  }
  /**
   * Removes last element from the stack and returns it.
   *
   * It works by storing the last property value of the stack
   * using the stored index. Then the property es deleted and the
   * index is decreased. The index cannot be less than -1 so it can
   * be prepared for storing the first stack element at index 0
   * when pushing it if the stack is empty.
   * @returns {*} The element
   */
  pop() {
    // Checking if stack is empty
    if (this.#index === -1) return undefined;
    
    const lastEl = this.#stack[this.#index];
    delete this.#stack[this.#index];
    this.#index -= 1;
    return lastEl;
  }
  /**
   * Returns the last element from the stack.
   *
   * It works by returning the property value corresponding
   * to current stack index.
   * @returns {*} The element
   */
  peek() {
    return this.#stack[this.#index];
  }
}

module.exports = { Stack };
