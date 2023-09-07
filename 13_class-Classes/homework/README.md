<a name="Cart"></a>

## Cart
Class that represents a cart

**Kind**: global class  

* [Cart](#Cart)
    * [.booksList](#Cart+booksList) ⇒ <code>Array</code>
    * [.addBook(book)](#Cart+addBook)
    * [.removeBook(book)](#Cart+removeBook)
    * [.calculateTotalPrice()](#Cart+calculateTotalPrice) ⇒ <code>number</code>

<a name="Cart+booksList"></a>

### cart.booksList ⇒ <code>Array</code>
Gets the book list

**Kind**: instance property of [<code>Cart</code>](#Cart)  
**Returns**: <code>Array</code> - - The book list  
<a name="Cart+addBook"></a>

### cart.addBook(book)
Adds a book to the cart

**Kind**: instance method of [<code>Cart</code>](#Cart)  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Book</code> | The book |

<a name="Cart+removeBook"></a>

### cart.removeBook(book)
Removes a book from the cart

**Kind**: instance method of [<code>Cart</code>](#Cart)  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Book</code> | The book |

<a name="Cart+calculateTotalPrice"></a>

### cart.calculateTotalPrice() ⇒ <code>number</code>
Calculates the total price of all the books in the cart

**Kind**: instance method of [<code>Cart</code>](#Cart)  
**Returns**: <code>number</code> - - The total price 