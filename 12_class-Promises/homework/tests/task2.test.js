const { promiseAllSettled } = require("../tasks/task2");

test("Expect multiple input errors", () => {
  expect(() => promiseAllSettled(4)).toThrow("Ony accepts array of promises.");
  expect(() => promiseAllSettled([1, 2, 3])).toThrow(
    "Ony accepts array of promises."
  );
  expect(() => promiseAllSettled([Promise.resolve(1), 1, 2, 3])).toThrow(
    "Ony accepts array of promises."
  );
  expect(() => promiseAllSettled([0, 1, 2, Promise.resolve(1)])).toThrow(
    "Ony accepts array of promises."
  );
});

test("Expect to receive multiple array with settled promises", () => {
  const promises1 = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3),
  ];

  const promises2 = [
    Promise.reject(0),
    Promise.reject(1),
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3),
    Promise.reject(14),
  ];

  promiseAllSettled(promises1).then((result) =>
    expect(result).toEqual([
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: "Error occurred" },
      { status: "fulfilled", value: 3 },
    ])
  );

  promiseAllSettled(promises2).then((result) =>
    expect(result).toEqual([
      { status: "rejected", reason: 0 },
      { status: "rejected", reason: 1 },
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: "Error occurred" },
      { status: "fulfilled", value: 3 },
      { status: "rejected", reason: 14 },
    ])
  );
});
