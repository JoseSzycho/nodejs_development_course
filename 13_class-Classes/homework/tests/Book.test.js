const { Cart } = require("../classes/Cart");
const { Book } = require("../classes/Book");
const { ActionBook } = require("../classes/ActionBook");
const { ThrillerBook } = require("../classes/ThrillerBook");

let testBook;
let actionBook;
let thrillerBook;
let testUserCart;
beforeAll(() => {
  testBook = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(2)
    .withAvailability(2);

  actionBook = new ActionBook()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(2)
    .withAvailability(2);

  thrillerBook = new ThrillerBook()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(2)
    .withAvailability(2);

  testUserCart = new Cart();
});

test("Expect new instance of book to have correct property values", () => {
  expect(testBook).toEqual({
    title: "Test Title",
    author: "Test Author",
    category: null,
    ISBN: "ISBN Number",
    price: 2,
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

  test("Expect action book category to be 'action'", () => {
    expect(actionBook.category).toBe("action");
  });
  test("Expect thriller book category to be 'thriller'", () => {
    expect(thrillerBook.category).toBe("thriller");
  });
});
