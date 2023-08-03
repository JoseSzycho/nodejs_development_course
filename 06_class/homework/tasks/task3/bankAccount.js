const bankAccount = {
  _balance: 1000,
  get formattedBalance() {
    return `$${this._balance}`;
  },
  set balance(value) {
    // Checking for a valid number
    if (!(typeof value === "number" && value >= 0))
      throw new TypeError("New value must be a number and >= 0.");

    this._balance = value;
  },
};

module.exports = { bankAccount };
