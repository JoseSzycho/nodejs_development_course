const { AsyncOperationManager } = require("../task/AsyncOperationManager");

describe("Test simlulateAsyncOperation method", (done) => {
  const OperationManager = new AsyncOperationManager();
  test("Expect a delayed output", () => {
    const callback = () => 5;
    const delay = 1000;

    try {
      expect(OperationManager.simulateAsyncOperation(callback, delay)).toBe(5);
      done();
    } catch (error) {
      done(error);
    }
  });
});
