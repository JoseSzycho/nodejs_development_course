const { Cart } = require("../classes/Cart");
const { Book } = require("../classes/Book");

let testBook1;
let testBook2;
let testBook3;
let testBook4;
let testUserCart1;
let testUserCart2;

beforeEach(() => {
  testUserCart1 = new Cart();
  testUserCart2 = new Cart();

  testBook1 = new Book()
    .withTitle("Test Title1")
    .withAuthor("Test Author1")
    .withISBN("ISBN Number1")
    .withPrice(5)
    .withAvailability(5);

  testBook2 = new Book()
    .withTitle("Test Title2")
    .withAuthor("Test Author2")
    .withISBN("ISBN Number2")
    .withPrice(2)
    .withAvailability(2);

  testBook3 = new Book()
    .withTitle("Test Title3")
    .withAuthor("Test Author3")
    .withISBN("ISBN Number3")
    .withPrice(5)
    .withAvailability(1);

  testBook4 = new Book()
    .withTitle("Test Title4")
    .withAuthor("Test Author4")
    .withISBN("ISBN Number4")
    .withPrice(2)
    .withAvailability(0);
});

test("Expect cart total price to be calculated.", () => {
  const testUserCart1 = new Cart();

  testUserCart1.addBook(testBook1);
  testUserCart1.addBook(testBook2);
  testUserCart1.addBook(testBook1);
  testUserCart1.addBook(testBook2);

  expect(testUserCart1.calculateTotalPrice()).toBe(14);
});

describe("Testing adding books and removing books from cart", () => {
  test("Expect books to be added.", () => {
    // Adding one book
    testUserCart1.addBook(testBook1);
    expect(testUserCart1.booksList).toEqual([testBook1]);

    // Adding another book
    testUserCart1.addBook(testBook3);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect not available books to not be added.", () => {
    
    testUserCart2.addBook(testBook2);
    testUserCart2.addBook(testBook2);

    // Adding not available book
    testUserCart1.addBook(testBook1);
    testUserCart1.addBook(testBook3);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect not available book to not modify book list.", () => {
    
    testUserCart1.addBook(testBook4);
    testUserCart1.addBook(testBook1);
    testUserCart1.addBook(testBook3);
    expect(testUserCart1.booksList).toEqual([testBook1, testBook3]);
  });

  test("Expect present books to be removed.", () => {
    // Removing present book
    testUserCart1.addBook(testBook1);
    testUserCart1.addBook(testBook3);
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
