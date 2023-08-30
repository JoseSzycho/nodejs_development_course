# Promises

[Read this article for a fast knowledge.](https://kevinyckim33.medium.com/what-are-promises-in-javascript-f1a5fc5b34bf)

[Read this article for deeper knowledge.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

In essence, a Promise in JavaScript is a lot like a promise made in real life. As promises in real life are either kept or broken, JavaScript Promises get either resolved or rejected.

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

## Promises states

The eventual state of a pending promise can either be **fulfilled with a value** or **rejected with a reason (error)**.

- **pending:** initial state, neither fulfilled nor rejected.
- **fulfilled:** meaning that the operation was completed successfully.
- **rejected:** meaning that the operation failed.

**A promise is said to be settled if it is either fulfilled or rejected, but not pending.**

![Alt text](./images/image.png)

## Promise concurrency

The Promise class offers four static methods to facilitate async task concurrency:

### Promise.all()

Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

### Promise.allSettled()

Fulfills when all promises settle.

### Promise.any()

Fulfills when any of the promises fulfills; rejects when all of the promises reject.

### Promise.race()

Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

### Promise.reject()

Returns a new Promise object that is rejected with the given reason.

### Promise.resolve()

Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

## Instance methods

### Promise.prototype.catch()

Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.

### Promise.prototype.finally()

Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

### Promise.prototype.then()

Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).

## Promise chain and more

[Read this article.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
