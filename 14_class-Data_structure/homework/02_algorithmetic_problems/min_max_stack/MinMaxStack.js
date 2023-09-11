const {
  Stack,
} = require("../../01_data_structure_implementations/stack/Stack");

/**
 * Create a stack data structure that can give max and min value in stack in O(1).
 *
 * It works by having two secondaries stack, a minStack which latest element is always the smallest one,
 * and a maxStack, which bigger element is always the bigger one.
 *
 * - How minStack works: when pushing a element, we check if this element is smallest than the previous
 * one, if so, we push it into the minStack, otherwise, we push the previous element of the minStack
 * that continues being the smallest one.
 *
 * - How maxStack works: when pushing a element, we check if this element is bigger than the previous
 * one, if so, we push it into the maxStack, otherwise, we push the previous element of the manStack
 * that continues being the biggest one.
 *
 * For stack explanation, please refer to ```../../01_data_structure_implementations/stack/README```
 */
class MinMaxStack {
  #stack;
  #maxStack;
  #minStack;
  constructor() {
    this.#stack = new Stack();
    this.#maxStack = new Stack();
    this.#minStack = new Stack();
  }
  /**
   * Push a new element into the stack.
   * @param {Number} el The element
   * @returns
   */
  push(el) {
    // If not a number, throws a error
    if (typeof el != "number") throw new Error("Input max be a number.");

    // Push element into stack
    this.#stack.push(el);

    // If first element, we add the value to minStack and maxStack
    if (this.#maxStack.peek() === undefined) {
      this.#maxStack.push(el);
      this.#minStack.push(el);
    } else {
      // If not, we check how to push the value in minStack and maxStack
      this.#pushMinStack(el);
      this.#pushMaxStack(el);
    }
  }
  /**
   * Pushes a value in the maxStack
   * @param {Number} el The element
   * @private
   */
  #pushMaxStack(el) {
    if (el >= this.#maxStack.peek()) {
      // If the element is bigger or equal than previous element, it gets pushed
      this.#maxStack.push(el);
    } else {
      // If not, we push the last element from the stack
      const previousMaxEl = this.#maxStack.peek();
      this.#maxStack.push(previousMaxEl);
    }
  }
  /**
   * Pushes a value in the minStack
   * @param {Number} el The element
   * @private
   */
  #pushMinStack(el) {
    if (el < this.#minStack.peek()) {
      // If the element is less than previous element, it gets pushed
      this.#minStack.push(el);
    } else {
      // If not, we push the last element from the stack
      const previousMinEl = this.#minStack.peek();
      this.#minStack.push(previousMinEl);
    }
  }
  /**
   * Returns the last element from the stack and remove it from the stack
   * @returns {Number} The last element
   */
  pop() {
    this.#maxStack.pop();
    this.#minStack.pop();
    return this.#stack.pop();
  }
  /**
   * Returns the last element from the stack
   * @returns {Number} The last element
   */
  peek() {
    return this.#stack.peek();
  }
  /**
   * Returns the max value of the stack
   * @returns {Number} The max value
   */
  maxValue() {
    return this.#maxStack.peek();
  }
  /**
   * Returns the min value of the stack
   * @returns {Number} The min value
   */
  minValue() {
    return this.#minStack.peek();
  }
}

module.exports = { MinMaxStack };
