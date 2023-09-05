const { Book } = require("../classes/Book");

test("Expect new instance of book to have correct property values", () => {
  const testBook = new Book()
    .withTitle("Test Title")
    .withAuthor("Test Author")
    .withISBN("ISBN Number")
    .withPrice("Price")
    .withAvailability("Available")
    .create();

  expect(testBook).toEqual({
    title: "Test Title",
    author: "Test Author",
    ISBN: "ISBN Number",
    price: "Price",
    availability: "Available",
  });
});
