///////////
// IT could be great to make this exercise using function constructor,
//  as the transfer function is perfect for being a prototype,
//  and using "instance of" I could easily check if a bank account is
//  the correct type for making the transfer
//
// As it is stated to use "Setter and Getter" I understand we must use object literal.
//////////

// Function that check if a number is positive and >= 0
const checkIfValidNumber = (errorMessage) => {
  return (value) => {
    if (!(typeof value === "number" && value >= 0))
      throw new TypeError(errorMessage);
  };
};

// checking valid number with custom message
const checkForNegativeBalance = checkIfValidNumber(
  "Balance cannot be negative."
);

// checking valid number with custom message
const checkForInvalidValue = checkIfValidNumber(
  "New value must be a number and >= 0."
);

// This function calculates which bankAccount argument is the sender.
// The sender will be the bankAccout that is calling the transfer method
const setRemitentAndTarget = (pointer, bankAccount1, bankAccount2) => {
  if (bankAccount1 == bankAccount2)
    throw new Error("Cannot transfer from the same bank account.");

  if (pointer == bankAccount1) {
    // If we are calling the method from bankAccount1, bankAccount2 is target
    return [bankAccount1, bankAccount2];
  } else if (pointer == bankAccount2) {
    // If we are calling the method from bankAccount2, bankAccount1 is target
    return [bankAccount2, bankAccount1];
  }

  throw new Error("Cannot transfer from a third account.");
};

const bankAccount = {
  _balance: 1000,
  _formattedBalance: "$1000",
  get formattedBalance() {
    return this._formattedBalance;
  },
  set balance(value) {
    // Checking for a valid number
    checkForInvalidValue(value);

    this._balance = value;
    this._formattedBalance = `$${value}`;
  },
  transfer(bankAccount1, bankAccount2, valueToTransfer) {
    checkForInvalidValue(valueToTransfer);
    const [currentAccount, targetAccount] = setRemitentAndTarget(
      this,
      bankAccount1,
      bankAccount2
    );

    const currentAccountNewBalance = currentAccount._balance - valueToTransfer;
    checkForNegativeBalance(currentAccountNewBalance); // If balance will be negative, throw an erro
    currentAccount.balance = currentAccountNewBalance;
    targetAccount.balance = targetAccount._balance + valueToTransfer;
  },
};

module.exports = { bankAccount };
