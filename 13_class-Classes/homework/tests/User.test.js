const { User } = require("../classes/User");
const { Book } = require("../classes/Book");

let testUser;
let testBook1;
let testBook2;
beforeEach(() => {
  testBook2 = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(5)
    .withAvailability(2);

  testBook1 = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(7)
    .withAvailability(2);
});

test("Expect new instance of book to have correct property values", () => {
  expect(testUser).toEqual({
    name: "Test Name",
    email: "test@email.com",
  });
});

test("Expect to not allows to create user with same ID", () => {
  const testUser1 = new User()
    .withName("Test Name")
    .withEmail("test@email.com")
    .withID("1");

  const testUser2 = new User()
    .withName("Test Name")
    .withEmail("test@email.com")
    .withID("2");

  expect(() => {
    new User().withName("Test Name").withEmail("test@email.com").withID("2");
  }).toThrow("User ID already used.");
});

describe("Expect add and remove books to update Book object", () => {
  testUser = new User()
    .withName("Test Name")
    .withEmail("test@email.com")
    .withID("ID number1");

  test("Expect testBook1 to update quantity", () => {
    testUser.cart.addBook(testBook1);
    expect(testBook1.availability).toBe(1);
  });

  test("Expect testBook2 to update quantity", () => {
    testUser.cart.addBook(testBook2);
    expect(testBook2.availability).toBe(1);
  });

  test("Expect total price to be calculated", () => {
    testUser = new User()
      .withName("Test Name")
      .withEmail("test@email.com")
      .withID("ID number2");

    testUser.cart.addBook(testBook1);
    testUser.cart.addBook(testBook2);
    expect(testUser.cart.calculateTotalPrice()).toBe(12);
  });
});
