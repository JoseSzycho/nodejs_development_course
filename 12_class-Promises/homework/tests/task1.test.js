const { promiseAll } = require("../tasks/task1");

test("Expect multiple input errors", () => {
  expect(() => promiseAll(4)).toThrow("Ony accepts array of promises.");
  expect(() => promiseAll([1, 2, 3])).toThrow("Ony accepts array of promises.");
  expect(() => promiseAll([Promise.resolve(1), 1, 2, 3])).toThrow(
    "Ony accepts array of promises."
  );
  expect(() => promiseAll([0, 1, 2, Promise.resolve(1)])).toThrow(
    "Ony accepts array of promises."
  );
});

test("Expected multiple promises array to be rejected", () => {
  const promises1 = [Promise.reject(1), Promise.reject(2), Promise.reject(4)];
  const promises2 = [Promise.resolve(0), Promise.reject(5), Promise.reject(4)];
  const promises3 = [Promise.resolve(2), Promise.resolve(3), Promise.reject(4)];
  const promises4 = [Promise.reject(5)];

  promiseAll(promises1).catch((error) => expect(error).toBe(1));
  promiseAll(promises2).catch((error) => expect(error).toBe(5));
  promiseAll(promises3).catch((error) => expect(error).toBe(4));
  promiseAll(promises4).catch((error) => expect(error).toBe(5));
});

test("Expect multiple promises array to be resolved", () => {
  const promises1 = [Promise.resolve(1)];
  const promises2 = [Promise.resolve(1), Promise.resolve(2)];
  const promises3 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];

  promiseAll(promises1).then((result) => expect(result).toEqual([1]));
  promiseAll(promises2).then((result) => expect(result).toEqual([1, 2]));
  promiseAll(promises3).then((result) => expect(result).toEqual([1, 2, 3]));
});
