test("Expect get property formattedBalance to return $1000", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(bankAccount.formattedBalance).toBe("$1000");
});

test("Expect setting new balance value to update formated balance value", () => {
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

test("Transfer from account 1 to account 2", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  const bankAccount1 = Object.create(bankAccount);
  const bankAccount2 = Object.create(bankAccount);
  let valueToTransfer = 5000;

  bankAccount1.balance = 9000;
  bankAccount2.balance = 8000;

  bankAccount1.transfer(bankAccount1, bankAccount2, valueToTransfer);

  expect(bankAccount1.formattedBalance).toBe("$4000");
  expect(bankAccount2.formattedBalance).toBe("$13000");

  valueToTransfer = 1000;

  // Switching order from bank accounts. bankAccount 1 should keep being the one that is transfering
  bankAccount1.transfer(bankAccount2, bankAccount1, valueToTransfer);
  expect(bankAccount1.formattedBalance).toBe("$3000");
  expect(bankAccount2.formattedBalance).toBe("$14000");

  
});

test("Expect error if an account argument is not the sending one", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  const bankAccount1 = Object.create(bankAccount);
  const bankAccount2 = Object.create(bankAccount);
  const bankAccount3 = Object.create(bankAccount);
  let valueToTransfer = 5000;

  bankAccount1.balance = 9000;
  bankAccount2.balance = 8000;
  bankAccount2.balance = 5000;

  expect(() =>
    bankAccount1.transfer(bankAccount2, bankAccount3, valueToTransfer)
  ).toThrow("Cannot transfer from a third account.");
});

test("Expect error if account will be in negative balance after transfer", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  const bankAccount1 = Object.create(bankAccount);
  const bankAccount2 = Object.create(bankAccount);
  let valueToTransfer = 10000;

  bankAccount1.balance = 9000;
  bankAccount2.balance = 8000;

  expect(() =>
    bankAccount1.transfer(bankAccount1, bankAccount2, valueToTransfer)
  ).toThrow("Balance cannot be negative.");
});

