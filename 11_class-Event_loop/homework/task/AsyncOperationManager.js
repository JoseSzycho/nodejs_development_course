// Class with static methods for scheduling asynchronous operations
class AsyncOperationManager {
  /* This static method simulates an asynchronous operation
   given a callback and delay sent by user. */
  static simulateAsyncOperation(callback, delay) {
    /* This operation will be queued in the first event loop phase 
    (the "timers phase"), but it is expected to be executed after the 
    "nextTick queue", even if the delay is 0, as the nextTick queue 
    and other microtasks executes their queue after each event loop 
    phase.*/
    setTimeout(callback, delay);
  }

  // This static method executes a callback
  // using process.nextTick
  static executeNextTick(callback) {
    /* This operation will be the first one in execute, as  it will be
    queued in the "nextTick queue", nextTick queue always run before each 
    event loop phase.*/
    process.nextTick(callback);
  }

  // This static executes a callback using setImmediate
  static scheduleImmediate(callback) {
    /* This operation will be the last one in execute, as it will be
    queued in the "check phase", which is the penultimate event loop
    phase. The other methods are queued before.  */
    setImmediate(callback);
  }
}

// Delay for simulating async operations
const noDelay = 0;
const someDelay = 1000;

// Creating HOF that returns a callback for the tests
const consoleCallback = (message) => {
  return () => console.log(message);
};

// Creating callbacks for testing the execution flow
const noDelayedAsyncCallback = consoleCallback(
  `Async operation completed after a minimum of ${noDelay} ms.`
);
const delayedAsyncCallback = consoleCallback(
  `Async operation completed after a minimum of ${someDelay} ms.`
);
const nextTickCallback = consoleCallback("NextTick operation executed.");
const immediateCallback = consoleCallback("Immediate operation executed.");

for (let i = 0; i < 2; i++) {
  console.log(`Loop number ${i+1}.`);
  AsyncOperationManager.scheduleImmediate(immediateCallback); // push callback to "Check phase queue"
  AsyncOperationManager.simulateAsyncOperation(noDelayedAsyncCallback, noDelay); // push callback to "Check timers queue"
  AsyncOperationManager.simulateAsyncOperation(delayedAsyncCallback, someDelay); // push callback to "Check timers queue"
  AsyncOperationManager.executeNextTick(nextTickCallback); // push callback to "NextTick queue"
}

/* With out previous knowledge of event loop, we would expect the console
output to be:

<- START FIRST LOOP ->
    Loop number 1.
    Immediate operation executed.
    Async operation completed after a minimum of 0 ms.
    Async operation completed after a minimum of 1000 ms.
    NextTick operation executed.
<-FINISH FIRST LOOP ->
<- START SECOND LOOP ->
    Loop number 2.
    Immediate operation executed.
    Async operation completed after a minimum of 0 ms.
    Async operation completed after a minimum of 1000 ms.
    NextTick operation executed.
<- FINISH SECOND LOOP ->

But, in fact, this is wrong, as the asynchronous tasks behaves
different. There are 6 different event loop phases, each one
queues a different type of callback. 
These phases are:
- Timers phase: * our simulateAsyncOperation method tasks are queued here *
- Pending called phase
- Idle, prepare phase
- Poll phase
- Check phase: * our scheduleImmediate method tasks are queued here * 
- Close phase

And there are two special blocks that executes before each phases
mentioned before, these blocks are:
- NextTick Queue: * our  executeNextTick method tasks are queued here *
- Other microtasks queue

EXPLAINING HOW THE CONSOLE WILL BEHAVE.

- Before executing the asynchronous callbacks, the call stack must 
be empty, so the next messages will be printed.

    Loop number 1.
    Loop number 2.

- Next, the NextTick queue have the priority, as it executes its
queued call backs before each phase. The next messages will be printed.

    NextTick operation executed.
    NextTick operation executed.

- As the event loop starts with the Timers phase, the callbacks with 
no delay are going to be executed.

    Async operation completed after a minimum of 0 ms.
    Async operation completed after a minimum of 0 ms.

- We skip pending callbacks phase, maybe some operations are performed
in the idle and prepare phase, poll phase is skipped, and now we get
into the check phase, here the check phase queue will be executed and
the next messages are going to be printed:

    Immediate operation executed.
    Immediate operation executed.

- There are not callbacks on the close phase, but we have some pending
callbacks in the timers phase, those callbacks that had <someDelay>, we 
have to wait for some minimum time, an the next messages are going
to be printed:

    Async operation completed after a minimum of 1000 ms.
    Async operation completed after a minimum of 1000 ms.

So, combining all the console prints, this is the output we will get:

    Loop number 1.
    Loop number 2.
    NextTick operation executed.
    NextTick operation executed.
    Immediate operation executed.
    Immediate operation executed.
    Async operation completed after a minimum of 0 ms.
    Async operation completed after a minimum of 0 ms.
    Async operation completed after a minimum of 1000 ms.
    Async operation completed after a minimum of 1000 ms.
*/


