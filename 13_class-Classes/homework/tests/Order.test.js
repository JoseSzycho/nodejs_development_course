const { User } = require("../classes/User");
const { Order } = require("../classes/Order");
const { Book } = require("../classes/Book");

let testBook1;
let testBook2;

beforeEach(() => {
  testBook1 = new Book()
    .withTitle("Test Title 1")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(1)
    .withAvailability(20);

  testBook2 = new Book()
    .withTitle("Test Title 2")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(10)
    .withAvailability(20);
});

test("Expect order to be shown", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("testemail@gmail.com")
    .withID("ID number 1");

  testUser.cart.addBook(testBook1);
  testUser.cart.addBook(testBook2);

  const testOrder = new Order().withUser(testUser);
  testOrder.show();
});

test("Expect order to be executed and cart to be cleaned up", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("testemail@gmail.com")
    .withID("ID number 2");

  testUser.cart.addBook(testBook1);
  testUser.cart.addBook(testBook2);

  const testOrder = new Order().withUser(testUser);
  expect(testUser.cart.booksList).toEqual([testBook1, testBook2]);
  testOrder.execute();
  expect(testUser.cart.booksList).toEqual([]);
});

test("Expect order to be cancelled and cart to be cleaned up", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("testemail@gmail.com")
    .withID("ID number 3");

  testUser.cart.addBook(testBook1);
  testUser.cart.addBook(testBook2);

  const testOrder = new Order().withUser(testUser);
  expect(testUser.cart.booksList).toEqual([testBook1, testBook2]);
  testOrder.cancel();
  expect(testUser.cart.booksList).toEqual([]);
});
