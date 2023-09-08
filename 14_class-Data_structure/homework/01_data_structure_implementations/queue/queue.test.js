const { Queue } = require("./Queue");

let queue;
beforeEach(() => {
  queue = new Queue();
});
test("Expect empty queue to return 'undefined'", () => {
  for (let i = 0; i < 3; i++) {
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe(undefined);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe(undefined);
  }
});

test("Expect queue to queue and dequeue in correct order.", () => {
  for (let i = 0; i < 5; i++) {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe(undefined);
  }
});

test("Expect peek to return the first element.", () => {
  for (let i = 0; i < 5; i++) {
    expect(queue.peek()).toBe(undefined);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
    queue.enqueue(4);
    expect(queue.peek()).toBe(1);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
    queue.dequeue();
    expect(queue.peek()).toBe(3);
    queue.dequeue();
    expect(queue.peek()).toBe(4);
    queue.dequeue();
    expect(queue.peek()).toBe(undefined);
  }
});
