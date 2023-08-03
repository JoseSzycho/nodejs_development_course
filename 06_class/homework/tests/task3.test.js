test("Expect get property formattedBalance to return $1000", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(bankAccount.formattedBalance).toBe("$1000");
});

test("Expect setting new balance value to update balance value", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  bankAccount.balance = 9834;
  expect(bankAccount.formattedBalance).toBe("$9834");
});

test("Expect negative new balance value to throw an error", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(() => (bankAccount.balance = -9834)).toThrow(
    "New value must be a number and >= 0."
  );
});

test("Expect NaN new balance value to throw an error", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(() => (bankAccount.balance = NaN)).toThrow(
    "New value must be a number and >= 0."
  );
});

test("Expect string new balance value to throw an error", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(() => (bankAccount.balance = "914")).toThrow(
    "New value must be a number and >= 0."
  );
});
