const {
  Stack,
} = require("../../01_data_structure_implementations/stack/Stack");

class MinMaxStack {
  #stack;
  #maxStack;
  #minStack;
  constructor() {
    this.#stack = new Stack();
    this.#maxStack = new Stack();
    this.#minStack = new Stack();
  }

  push(el) {
    if (typeof el != "number") throw new Error("Input max be a number.");

    this.#stack.push(el);
    if (this.#maxStack.peek() === undefined) {
      this.#maxStack.push(el);
      this.#minStack.push(el);
      return;
    }
    this.#pushMinStack(el);
    this.#pushMaxStack(el);
  }
  #pushMaxStack(el) {
    if (el >= this.#maxStack.peek()) {
      this.#maxStack.push(el);
    } else {
      const previousMaxEl = this.#maxStack.peek();
      this.#maxStack.push(previousMaxEl);
    }
  }
  #pushMinStack(el) {
    if (el < this.#minStack.peek()) {
      this.#minStack.push(el);
    } else {
      const previousMinEl = this.#minStack.peek();
      this.#minStack.push(previousMinEl);
    }
  }
  pop() {
    this.#maxStack.pop();
    this.#minStack.pop();
    return this.#stack.pop();
  }
  peek() {
    return this.#stack.peek();
  }
  maxValue() {
    return this.#maxStack.peek();
  }
  minValue() {
    return this.#minStack.peek();
  }
}

module.exports = { MinMaxStack };
