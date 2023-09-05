const { User } = require("../classes/User");

test("Expect new instance of book to have correct property values", () => {
  const testUser = new User()
    .withName("Test Name")
    .withEmail("Test email")
    .withID("ID number")
    .create();

  expect(testUser).toEqual({
    name: "Test Name",
    email: "Test email",
    ID: "ID number",
  });
});
