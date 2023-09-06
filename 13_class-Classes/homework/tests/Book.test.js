const { Book } = require("../classes/Book");
const { Cart } = require("../classes/Cart");

let testBook;
let testUserCart;
beforeAll(() => {
  testBook = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice("Price")
    .withAvailability(2);

  testUserCart = new Cart();
});

test("Expect new instance of book to have correct property values", () => {
  expect(testBook).toEqual({
    title: "Test Title",
    author: "Test Author",
    ISBN: "ISBN Number",
    price: "Price",
    availability: 2,
  });
});

describe("Expect books availability to be updated correctly. Availability = 2", () => {
  test("Expect testBook availability to be 2", () => {
    expect(testBook.availability).toBe(2);
  });

  test("Expect testBook availability to be 1 after book removal", () => {
    testUserCart.addBook(testBook);
    expect(testBook.availability).toBe(1);
  });

  test("Expect testBook availability to be 0 after book removal", () => {
    testUserCart.addBook(testBook);
    expect(testBook.availability).toBe(0);
  });

  test("Expect testBook availability to be 0 after book removal", () => {
    testUserCart.addBook(testBook);
    expect(testBook.availability).toBe(0);
  });

  test("Expect testBook availability to be 1 after book adding", () => {
    testUserCart.removeBook(testBook);
    expect(testBook.availability).toBe(1);
  });

  test("Expect testBook availability to be 2 after book adding", () => {
    testUserCart.removeBook(testBook);
    expect(testBook.availability).toBe(2);
  });

  test("Expect testBook availability to be 2 after book adding", () => {
    testUserCart.removeBook(testBook);
    expect(testBook.availability).toBe(2);
  });
});
