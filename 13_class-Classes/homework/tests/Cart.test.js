const { Cart } = require("../classes/Cart");
const { User } = require("../classes/User");
const { Book } = require("../classes/Book");

test("Expect cart total price to be calculated.", () => {
  const testBook1 = new Book()
    .withTitle("Test Title1")
    .withAuthor("Test Author1")
    .withISBN("ISBN Number1")
    .withPrice(5)
    .withAvailability(5);

  const testBook2 = new Book()
    .withTitle("Test Title2")
    .withAuthor("Test Author2")
    .withISBN("ISBN Number2")
    .withPrice(2)
    .withAvailability(2);

  const testUserCart1 = new Cart();

  testUserCart1.addBook(testBook1);
  testUserCart1.addBook(testBook2);
  testUserCart1.addBook(testBook1);
  testUserCart1.addBook(testBook2);

  expect(testUserCart1.calculateTotalPrice()).toBe(14);
});

describe("Testing adding books and removing books from cart", () => {
  // Creating instances of Book for testing
  const testBook1 = new Book()
    .withTitle("Test Title1")
    .withAuthor("Test Author1")
    .withISBN("ISBN Number1")
    .withPrice("Price1")
    .withAvailability(5);

  const testBook2 = new Book()
    .withTitle("Test Title2")
    .withAuthor("Test Author2")
    .withISBN("ISBN Number2")
    .withPrice("Price2")
    .withAvailability(0);

  const testBook3 = new Book()
    .withTitle("Test Title3")
    .withAuthor("Test Author3")
    .withISBN("ISBN Number3")
    .withPrice("Price3")
    .withAvailability(1);

  const testBook4 = new Book()
    .withTitle("Test Title4")
    .withAuthor("Test Author4")
    .withISBN("ISBN Number4")
    .withPrice("Price4")
    .withAvailability(1);
  // Creating Cart for testing
  const testUserCart1 = new Cart();

  test("Expect books to be added.", () => {
    // Adding one book
    testUserCart1.addBook(testBook1);
    expect(testUserCart1.booksList).toEqual([testBook1]);

    // Adding another book
    testUserCart1.addBook(testBook3);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect not available books to not be added.", () => {
    // Adding not available book
    testUserCart1.addBook(testBook2);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect not present book to not modify book list.", () => {
    // Removing not present book
    testUserCart1.removeBook(testBook4);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect present books to be removed.", () => {
    // Removing present book
    testUserCart1.removeBook(testBook1);
    expect(testUserCart1.booksList).toEqual([testBook3]);

    // Removing present book
    testUserCart1.removeBook(testBook3);
    expect(testUserCart1.booksList).toEqual([]);

    // Removing when there are no more books
    testUserCart1.removeBook(testBook3);
    expect(testUserCart1.booksList).toEqual([]);
  });
});
