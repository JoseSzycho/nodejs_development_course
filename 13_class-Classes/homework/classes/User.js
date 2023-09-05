class User {
  constructor() {
    this.user = {};
  }
  withName(name) {
    this.user.name = name;
    return this;
  }
  withEmail(email) {
    this.user.email = email;
    return this;
  }
  withID(ID) {
    this.user.ID = ID;
    return this;
  }
  create() {
    return this.user;
  }
}

module.exports = { User };
