const {
  Stack,
} = require("../../01_data_structure_implementations/stack/Stack");

class MinMaxStack {
  #stack;
  #maxMinStack;
  constructor() {
    this.#stack = new Stack();
    this.#maxMinStack = new Stack();
  }

  push(el) {
    if (typeof el != "number") throw new Error("Input max be a number.");

    this.#stack.push(el);
    if (this.#maxMinStack.peek() === undefined) {
      this.#maxMinStack.push(el);
      return;
    }
    if (el >= this.#maxMinStack.peek()) {
      this.#maxMinStack.push(el);
      return;
    }
    const previousMaxEl = this.#maxMinStack.peek();
    this.#maxMinStack.push(el);
  }
  pop() {
    this.#maxMinStack.pop();
    return this.#stack.pop();
  }
  peek() {
    return this.#stack.peek();
  }
}

const stack = new Stack();
