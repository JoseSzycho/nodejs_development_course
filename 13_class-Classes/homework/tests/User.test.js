const { User } = require("../classes/User");
const { Cart } = require("../classes/Cart");
const { Book } = require("../classes/Book");

test("Expect new instance of book to have correct property values", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("Test email")
    .withID("ID number");

  expect(testUser).toEqual({
    name: "Test Name",
    email: "Test email",
    ID: "ID number",
    cart: new Cart(),
  });
});

describe("Expect add and remove books to update Book object", () => {
  const testBook1 = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(1)
    .withAvailability(2);

  const testBook2 = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(5)
    .withAvailability(2);

  const testUser = new User()
    .withName("Test Name")
    .withEmail("Test email")
    .withID("ID number");

  test("Expect testBook1 to update quantity", () => {
    testUser.cart.addBook(testBook1);
    expect(testBook1.availability).toBe(1);
  });

  test("Expect testBook2 to update quantity", () => {
    testUser.cart.addBook(testBook2);
    expect(testBook2.availability).toBe(1);
  });

  test("Expect total price to be calculated", () => {
    testUser.cart.addBook(testBook1);
    testUser.cart.addBook(testBook2);
    expect(testUser.cart.calculateTotalPrice()).toBe(12);
  });
});
