const fs = require("fs");

class DataBase {
  #path;
  constructor() {
    this.#path = path;
  }
  withPath(path) {
    if (typeof path != "string") throw new Error("Invalid path type.");
    this.#path = path;
    return this;
  }
  #loadData() {
    try {
      const data = fs.readFileSync(this.#path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  getUsers() {
    const users = this.#loadData.users.map((user) => user);
    return users;
  }
  getBooks() {
    const books = this.#loadData.books.map((book) => book);
  }
}
