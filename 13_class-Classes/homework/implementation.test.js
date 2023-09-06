/* This file shows a basic implementation case example
of the Online Bookstore, where different jest test will be 
implemented in different steps of the code to show and 
demonstrate how classes interact between them selves. */

// Classes importation
// Cart class is not imported as it is a property of User
const { User } = require("./classes/User");
const { Order } = require("./classes/Order");
const { Book } = require("./classes/Book");

describe("Implementation example.", () => {
  /******************************************/
  /*------Creating some Book instances------*/
  const book1 = new Book()
    .withTitle("Book title 1")
    .withAuthor("Book author One")
    .withISBN("ISBN Number 1")
    .withPrice(1)
    .withAvailability(1);

  const book2 = new Book()
    .withTitle("Book title 2")
    .withAuthor("Book author Two")
    .withISBN("ISBN Number 2")
    .withPrice(2)
    .withAvailability(2);

  const book3 = new Book()
    .withTitle("Book title 3")
    .withAuthor("Book author Tthree")
    .withISBN("ISBN Number 3")
    .withPrice(3)
    .withAvailability(3);

  // Creating a book with a invalid price
  test("Expect price to be invalid.", () => {
    expect(() => {
      const book3 = new Book()
        .withTitle("Book title 3")
        .withAuthor("Book author Three")
        .withISBN("ISBN Number 3")
        .withPrice(-3)
        .withAvailability(3);
    }).toThrow("Invalid book price.");
  });

  /******************************************/
  /*------Creating some user instances------*/
  const user1 = new User()
    .withName("Test User One")
    .withEmail("test@user1.com")
    .withID("1");

  const user2 = new User()
    .withName("Test User Two")
    .withEmail("test@user2.com")
    .withID("2");

  // Creating a user with a repeated ID
  test("Expect user with repeated ID not to be created.", () => {
    expect(() => {
      const user4 = new User()
        .withName("Test User Three")
        .withEmail("test@user3.com")
        .withID("2");
    }).toThrow("User ID already used.");
  });

  /*********************************************************/
  /*------Simulating users adding books to their cart------*/

  test("Expect user1 to have book1, book2 and book3 on the cart.", () => {
    // user1 adds book1 and book2
    user1.cart.addBook(book1); // console: Book added to the cart.
    user1.cart.addBook(book2); // console: Book added to the cart.
    user1.cart.addBook(book3); // console: Book added to the cart.
    expect(user1.cart.booksList).toEqual([book1, book2, book3]);
  });

  test("Expect user2 to have book2 on the cart.", () => {
    // user2 adds book2 and try to add book1
    user2.cart.addBook(book2); // console: Book added to the cart.
    user2.cart.addBook(book1); // console: Book is not available.
    expect(user2.cart.booksList).toEqual([book2]);
  });

  /************************************************************/
  /*------Simulating user removing books from their cart------*/

  test("Expect user2 to not have books on the cart.", () => {
    // user2 delete some books
    user2.cart.removeBook(book1); // console: Book is not present in the cart.
    user2.cart.removeBook(book2); // console: Book removed from the cart.
    expect(user2.cart.booksList).toEqual([]);
  });

  /*********************************************/
  /*------Seeing Books instances behavior*------/

  /* When the book instances where created, these was each availability:
  book1.availability: 1 , but after one is taken by user1
  book1.availability: 2 , but after one unit is taken by user1
  book1.availability: 3 , but after one unit is taken by user1

  user2 toke some books, but he have all of them back.
  */

  // Checking book1, book2 and book3 quantities to be correct.
  test("Expect book1 quantity to be 0", () => {
    expect(book1.availability).toBe(0);
  });
  test("Expect book2 quantity to be 1", () => {
    expect(book2.availability).toBe(1);
  });
  test("Expect book3 quantity to be 2", () => {
    expect(book3.availability).toBe(2);
  });
});
