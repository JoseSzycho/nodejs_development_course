test("Expect get property formattedBalance to return $1000", () => {
  const { bankAccount } = require("../tasks/task3/bankAccount");
  expect(bankAccount.formattedBalance).toBe("$1000");
});
