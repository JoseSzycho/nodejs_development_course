const bankAccount = {
  balance: 1000,
  get formattedBalance() {
    return `$${this.balance}`;
  },
};

module.exports = { bankAccount };
