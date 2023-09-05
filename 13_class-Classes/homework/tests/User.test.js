const { User } = require("../classes/User");
const { Cart } = require("../classes/Cart");

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
