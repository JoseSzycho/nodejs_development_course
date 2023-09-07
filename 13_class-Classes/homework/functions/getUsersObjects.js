/**
 * Converts array of object into array of User instance
 * @param {Array} usersData - The users data
 * @param {User} User - The User class
 * @returns {Array} - The array containing the users instance
 */
const getUsersObjects = (usersData, User) => {
  // Creating User instance for each object
  const importedUsers = usersData.map((user) => {
    try {
      return new User()
        .withName(user.name)
        .withEmail(user.email)
        .withID(user.ID);
    } catch (error) {
      console.log(`Error on loading user from data base. ${error.message}`);
    }
  });
  // Removing undefined elements, caused by load error.
  const users = importedUsers.filter((el) => el != undefined);
  return users;
};

module.exports = { getUsersObjects };
