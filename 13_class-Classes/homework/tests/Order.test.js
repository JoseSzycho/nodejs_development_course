const { User } = require("../classes/User");
const { Order } = require("../classes/Order");
const { Book } = require("../classes/Book");

test("Expect order to be consoled", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("Test email")
    .withID("ID number");

  const testBook1 = new Book()
    .withTitle("Test Title 1")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(1)
    .withAvailability(2);

  const testBook2 = new Book()
    .withTitle("Test Title 2")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice(1)
    .withAvailability(2);

  testUser.cart.addBook(testBook1);
  testUser.cart.addBook(testBook2);

  const testOrder = new Order().withUser(testUser);

  testOrder.show();
});
