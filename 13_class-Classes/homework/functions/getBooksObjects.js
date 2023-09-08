/**
 * Converts array of object into array of Book instance
 * @param {Array} booksData The books data
 * @param {Book} Book The Book class
 * @param {ActionBook} ActionBook The Action Book Class
 * @param {ThrillerBook} ThrillerBook The Thriller Book Class
 * @returns {Array} The array containing the books instance
 */
const getBooksObjects = (booksData, Book, ActionBook, ThrillerBook) => {
  // Creating Book instance for each type of Book
  const importedBooks = booksData.map((book) => {
    try {
      let BookType;
      if (book.category === null) BookType = Book;
      if (book.category === "action") BookType = ActionBook;
      if (book.category === "thriller") BookType = ThrillerBook;

      return new BookType()
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
