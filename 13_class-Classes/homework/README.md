## Implementation

Please see `./implementation.test.js` or [click here](./implementation.test.js) to see a implementation-like file.

This file **shows** a basic **implementation** case example of the **Online Bookstore**, where different jest test will be implemented in different steps of the code to show and demonstrate how classes interact between them selves.

**1.** User, Books and Order objects will be created

**2.** Different users will add / remove books and it will be shown how this movements affects the books availability.

**3.** Orders will be placed and cancelled, and it will be shown hows this actions modify other objects states.

## Demonstration

Please execute `./demostration` or [click here to go to code](./demostration.js).

**Be sure your path is `~/nodejs_development_course/13_class-Classes/homework$ ` before executing the code, or data base will throw and error.** 
Data base data can be modified  from `./data_base/data.json`.

The next interactive scenario will be presented in the terminal console.

```
--------MAIN MENU--------
      1. Change user
      2. Show books on sale
      3. Search book
      4. Add book to cart
      5. Remove book from cart
      6. Show order
      7. Place order
      8. Place order with discount
      9. Cancel order
```
- Four users will be loaded
- For books will be loaded

Interaction between objects can be made by changing users, adding / removing books from each and more.

__Interaction between objects__ can bee seen by looking at books availability changes (__option 2. Shows books on sale__) after any order is cancelled or book is added or removed from user.

# Code documentation

<a name="Book"></a>

## Book

Class that represents a book

**Kind**: global class

- [Book](#Book)
  - [.withTitle(title)](#Book+withTitle) ⇒ <code>this</code>
  - [.withAuthor(author)](#Book+withAuthor) ⇒ <code>this</code>
  - [.withISBN(ISBN)](#Book+withISBN) ⇒ <code>this</code>
  - [.withPrice(price)](#Book+withPrice) ⇒ <code>this</code>
  - [.withAvailability(availability)](#Book+withAvailability) ⇒ <code>this</code>

<a name="Book+withTitle"></a>

### book.withTitle(title) ⇒ <code>this</code>

Sets the book title

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| title | <code>string</code> | The title   |

<a name="Book+withAuthor"></a>

### book.withAuthor(author) ⇒ <code>this</code>

Sets the book author

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>this</code> - - The class reference

| Param  | Type                | Description |
| ------ | ------------------- | ----------- |
| author | <code>string</code> | The author  |

<a name="Book+withISBN"></a>

### book.withISBN(ISBN) ⇒ <code>this</code>

Sets the book ISBN with no verification, for easier implementation.

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| ISBN  | <code>string</code> | The ISBN    |

<a name="Book+withPrice"></a>

### book.withPrice(price) ⇒ <code>this</code>

Sets the book price

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| price | <code>number</code> | The price   |

<a name="Book+withAvailability"></a>

### book.withAvailability(availability) ⇒ <code>this</code>

Sets the availability of the book

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>this</code> - - The class reference

| Param        | Type                | Description      |
| ------------ | ------------------- | ---------------- |
| availability | <code>number</code> | The availability |

<a name="Cart"></a>

## Cart

Class that represents a cart

**Kind**: global class

- [Cart](#Cart)
  - [.booksList](#Cart+booksList) ⇒ <code>Array</code>
  - [.addBook(book)](#Cart+addBook)
  - [.removeBook(book)](#Cart+removeBook)
  - [.calculateTotalPrice()](#Cart+calculateTotalPrice) ⇒ <code>number</code>
  - [.cleanBookList()](#Cart+cleanBookList)

<a name="Cart+booksList"></a>

### cart.booksList ⇒ <code>Array</code>

Gets the book list

**Kind**: instance property of [<code>Cart</code>](#Cart)  
**Returns**: <code>Array</code> - - The book list  
<a name="Cart+addBook"></a>

### cart.addBook(book)

Adds a book to the cart and updates
the book availability

**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type              | Description |
| ----- | ----------------- | ----------- |
| book  | <code>Book</code> | The book    |

<a name="Cart+removeBook"></a>

### cart.removeBook(book)

Removes a book from the cart and updates
the book availability

**Kind**: instance method of [<code>Cart</code>](#Cart)

| Param | Type              | Description |
| ----- | ----------------- | ----------- |
| book  | <code>Book</code> | The book    |

<a name="Cart+calculateTotalPrice"></a>

### cart.calculateTotalPrice() ⇒ <code>number</code>

Calculates the total price of all the books in the cart

**Kind**: instance method of [<code>Cart</code>](#Cart)  
**Returns**: <code>number</code> - - The total price  
<a name="Cart+cleanBookList"></a>

### cart.cleanBookList()

Remove all books from books list

**Kind**: instance method of [<code>Cart</code>](#Cart)

<a name="DataBase"></a>

<a name="Order"></a>

## Order

Class that represents an order

**Kind**: global class

- [Order](#Order)
  - [.withUser(user)](#Order+withUser) ⇒ <code>this</code>
  - [.show(discount)](#Order+show)
  - [.cancel()](#Order+cancel)
  - [.place()](#Order+place)

<a name="Order+withUser"></a>

### order.withUser(user) ⇒ <code>this</code>

Sets the user

**Kind**: instance method of [<code>Order</code>](#Order)  
**Returns**: <code>this</code> - - Reference to the order class

| Param | Type              | Description |
| ----- | ----------------- | ----------- |
| user  | <code>User</code> | The user    |

<a name="Order+show"></a>

### order.show(discount)

Shows the cart list with total price and
apply discount to total price if there is.

**Kind**: instance method of [<code>Order</code>](#Order)

| Param    | Type                | Default       | Description  |
| -------- | ------------------- | ------------- | ------------ |
| discount | <code>number</code> | <code></code> | The discount |

<a name="Order+cancel"></a>

### order.cancel()

Remove all books from user cart and recovery the
availability of the books.

**Kind**: instance method of [<code>Order</code>](#Order)  
<a name="Order+place"></a>

### order.place()

Place order in a representative way, then it
removes the books from user cart.

**Kind**: instance method of [<code>Order</code>](#Order)

<a name="User"></a>

## User

Class that represents a user

**Kind**: global class

- [User](#User)
  - [.ID](#User+ID) ⇒ <code>string</code>
  - [.cart](#User+cart) ⇒ <code>Cart</code>
  - [.withName(name)](#User+withName) ⇒ <code>this</code>
  - [.withEmail(email)](#User+withEmail) ⇒ <code>this</code>
  - [.withID(ID)](#User+withID) ⇒ <code>this</code>

<a name="User+ID"></a>

### user.ID ⇒ <code>string</code>

Gets the user ID

**Kind**: instance property of [<code>User</code>](#User)  
**Returns**: <code>string</code> - - The user ID  
<a name="User+cart"></a>

### user.cart ⇒ <code>Cart</code>

Gets the user cart

**Kind**: instance property of [<code>User</code>](#User)  
**Returns**: <code>Cart</code> - - The user cart  
<a name="User+withName"></a>

### user.withName(name) ⇒ <code>this</code>

Sets the user name

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| name  | <code>string</code> | The user name |

<a name="User+withEmail"></a>

### user.withEmail(email) ⇒ <code>this</code>

Sets the user email address

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| email | <code>string</code> | The user email |

<a name="User+withID"></a>

### user.withID(ID) ⇒ <code>this</code>

Sets the users ID

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>this</code> - - The class reference

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| ID    | <code>string</code> | The user ID |

## DataBase

Class that allows to load pre-created data. The returned data
is an array where is each element is an object with the
desired data.

**Kind**: global class

- [DataBase](#DataBase)
  - [.withPath(path)](#DataBase+withPath) ⇒ <code>this</code>
  - [.getUsers()](#DataBase+getUsers) ⇒ <code>Array</code>
  - [.getBooks()](#DataBase+getBooks) ⇒ <code>Array</code>

<a name="DataBase+withPath"></a>

### dataBase.withPath(path) ⇒ <code>this</code>

Sets data base path

**Kind**: instance method of [<code>DataBase</code>](#DataBase)  
**Returns**: <code>this</code> - - The reference to the data base object

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| path  | <code>string</code> | The database path |

<a name="DataBase+getUsers"></a>

### dataBase.getUsers() ⇒ <code>Array</code>

Gets users from data base

**Kind**: instance method of [<code>DataBase</code>](#DataBase)  
**Returns**: <code>Array</code> - - The users data  
<a name="DataBase+getBooks"></a>

### dataBase.getBooks() ⇒ <code>Array</code>

Gets books from data base

**Kind**: instance method of [<code>DataBase</code>](#DataBase)  
**Returns**: <code>Array</code> - - The books data

<a name="Navigation"></a>

## Navigation

Class that provides and interactive menu for
simulating the book store and the interaction
between different classes.

**Kind**: global class

- [Navigation](#Navigation)
  - [.withUsers(users)](#Navigation+withUsers) ⇒ <code>this</code>
  - [.withBooks(books)](#Navigation+withBooks) ⇒ <code>this</code>
  - [.withActualUser(actualUser)](#Navigation+withActualUser) ⇒ <code>this</code>
  - [.mainMenu()](#Navigation+mainMenu)
  - [.changeUser()](#Navigation+changeUser)
  - [.booksOnSale(flag)](#Navigation+booksOnSale)
  - [.searchBook()](#Navigation+searchBook)
  - [.addBook()](#Navigation+addBook)
  - [.removeBook()](#Navigation+removeBook)
  - [.showOrder()](#Navigation+showOrder)
  - [.placeOrder()](#Navigation+placeOrder)
  - [.placeDiscountedOrder()](#Navigation+placeDiscountedOrder)
  - [.cancelOrder()](#Navigation+cancelOrder)
  - [.showBook(book)](#Navigation+showBook)

<a name="Navigation+withUsers"></a>

### navigation.withUsers(users) ⇒ <code>this</code>

Sets the users

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
**Returns**: <code>this</code> - - Reference to the class

| Param | Type               | Description                  |
| ----- | ------------------ | ---------------------------- |
| users | <code>Array</code> | The array that contain users |

<a name="Navigation+withBooks"></a>

### navigation.withBooks(books) ⇒ <code>this</code>

Sets the users

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
**Returns**: <code>this</code> - - Reference to the class

| Param | Type               | Description                  |
| ----- | ------------------ | ---------------------------- |
| books | <code>Array</code> | The array that contain books |

<a name="Navigation+withActualUser"></a>

### navigation.withActualUser(actualUser) ⇒ <code>this</code>

Sets and user for creating instance of class

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
**Returns**: <code>this</code> - - The class reference

| Param      | Type              | Description |
| ---------- | ----------------- | ----------- |
| actualUser | <code>User</code> | The user    |

<a name="Navigation+mainMenu"></a>

### navigation.mainMenu()

Shows an interactive menu

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+changeUser"></a>

### navigation.changeUser()

Logic for changing user

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+booksOnSale"></a>

### navigation.booksOnSale(flag)

// Shows the books that are for sale

**Kind**: instance method of [<code>Navigation</code>](#Navigation)

| Param | Type                 | Default            | Description                                                                 |
| ----- | -------------------- | ------------------ | --------------------------------------------------------------------------- |
| flag  | <code>boolean</code> | <code>false</code> | If true, skips calling to mainMenu(), so it can be used with others methods |

<a name="Navigation+searchBook"></a>

### navigation.searchBook()

Search for a specific book by its exact title.

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+addBook"></a>

### navigation.addBook()

Methods that adds a book to the cart

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+removeBook"></a>

### navigation.removeBook()

Removes a book from user cart

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+showOrder"></a>

### navigation.showOrder()

Shows the user cart and total amount. This is only
representative, that is why we create the order instance
for later deleting the reference

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+placeOrder"></a>

### navigation.placeOrder()

Shows the user cart and total amount and place the
order. This is only representative, that is why we
create the order instance for later deleting the reference

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+placeDiscountedOrder"></a>

### navigation.placeDiscountedOrder()

Shows the user cart and total amount and place the
order with a discount in %. This is only representative,
that is why we create the order instance for later
deleting the reference

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+cancelOrder"></a>

### navigation.cancelOrder()

Cancel the user order. It removes the books from its
cart and returns the availability for each book.

**Kind**: instance method of [<code>Navigation</code>](#Navigation)  
<a name="Navigation+showBook"></a>

### navigation.showBook(book)

Prints the book information. Used as an auxiliary
method for other methods.

**Kind**: instance method of [<code>Navigation</code>](#Navigation)

| Param | Type              | Description        |
| ----- | ----------------- | ------------------ |
| book  | <code>Book</code> | The book to print. |
