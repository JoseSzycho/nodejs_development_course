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
    .withAuthor("Book author Three")
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

  /*******************************************/
  /*------Creating some order instances------*/
  let user1Order = new Order().withUser(user1);
  let user2Order = new Order().withUser(user2);

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
  /*------Seeing Books instances behavior------*/

  /* When the book instances where created, these was each availability:
  book1.availability: 1 , but after one is taken by user1
  book1.availability: 2 , but after one unit is taken by user1
  book1.availability: 3 , but after one unit is taken by user1

  user2 toke some books, but he gave all of them back.
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

  /**********************************/
  /*------Showing cart content------*/

  // user1 added book1 (PLN 1), book2 (PLN 2), book3 (PLN 3)
  test("Expect user1 cart total price to be 6", () => {
    expect(user1.cart.calculateTotalPrice()).toBe(6);
  });

  test("Expect user1 cart to be shown.", () => {
    user1Order.show(); /* console:
            User information:
                - name: Test User One
                - email: test@user1.com
                - ID: 1
    
            Book/s to purchase: 
                - Book title 1
                - Book title 2
                - Book title 3
                
            Total price:
                - PLN 6
    */
  });

  // user2 do not have any book on its cart
  test("Expect user1 cart total price to be 0", () => {
    expect(user2.cart.calculateTotalPrice()).toBe(0);
  });

  test("Expect user1 cart to be shown.", () => {
    user2Order.show(); // console: Cart is empty.
  });

  /*****************************/
  /*------Placing an order------*/

  // user1 have three books on its cart, he is able to place the order
  test("Expect user1 order to be placed.", () => {
    user1Order.place(); // console: "Your order has been placed"
    user1Order = null;
  });

  // user2 have an empty cart, he cannot place an order.
  test("Expect user2 order to not be placed.", () => {
    user2Order.place(); // console: "Your oder has been placed"
  });

  /**********************************************/
  /*------User cart after placing an order------*/

  // As the order have been placed, the user1 cart
  // must be empty, as he already purchased the books
  test("Expect user1 cart bookList  to be empty.", () => {
    expect(user1.cart.booksList).toEqual([]);
  });

  /*************************************/
  /*------User canceling an order------*/

  // As an order is canceled, the books must be removed
  // from the user cart, and the books should update the
  // same quantity

  test("Expect book 3 to be have availability of 2", () => {
    expect(book3.availability).toBe(2);
  });

  test("Expect user2 to add book3 and expect book3 availability to be 1", () => {
    user2.cart.addBook(book3);
    expect(book3.availability).toBe(1);
  });

  test("Expect user2 to cancel order and expect book3 availability to be 2", () => {
    user2Order.cancel();
    expect(book3.availability).toBe(2);
  });

  test("Expect user2 car to be empty", () => {
    expect(user2.cart.booksList.length).toBe(0);
  });
});
