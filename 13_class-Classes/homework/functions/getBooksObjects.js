/**
 * Converts array of object into array of Book instance
 * @param {Array} booksData - The books data
 * @param {Book} Book - The Book class
 * @returns {Array} - The array containing the books instance
 */
const getBooksObjects = (booksData, Book) => {
  // Creating Book instance for each object
  const importedBooks = booksData.map((book) => {
    try {
      return new Book()
        .withTitle(book.title)
        .withAuthor(book.author)
        .withISBN(book.ISBN)
        .withPrice(book.price)
        .withAvailability(book.availability);
    } catch (error) {
      console.log(`Error on loading book from data base. ${error.message}`);
    }
  });
  // Removing undefined elements, caused by load error.
  const books = importedBooks.filter((el) => el != undefined);
  return books;
};

module.exports = { getBooksObjects };
