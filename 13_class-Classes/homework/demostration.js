const readline = require("readline");
const { User } = require("./classes/User");
const { Order } = require("./classes/Order");
const { Book } = require("./classes/Book");
const { DataBase } = require("./classes/DataBase");
const { Navigation } = require("./classes/Navigation");
const { getUsersObjects } = require("./functions/getUsersObjects");
const { getBooksObjects } = require("./functions/getBooksObjects");

const db = new DataBase().withPath("./data_base/data.json");

// Getting array of parsed objects
const usersData = db.getUsers();
const booksData = db.getBooks();

// Getting array of class instances for each array
// of parsed objects
const users = getUsersObjects(usersData, User);
const books = getBooksObjects(booksData, Book);

// Starts interactive scenario
const navigation = new Navigation()
  .withUsers(users)
  .withBooks(books)
  .withActualUser(users[0]);

navigation.mainMenu();