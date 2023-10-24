# Class 26 - SQL

SQL is a language for manipulate and extract data from a data base.

**With SQL you can:**

1.  **Data Definition Language (DDL):**

    - Purpose: DDL is used for defining and managing the structure of the database, including tables, schemas, indexes, and constraints.
    - Commands: Common DDL commands include `CREATE`, `ALTER`, `DROP`, and `TRUNCATE`.
    - Examples:
      - `CREATE TABLE` creates a new table.
      - `ALTER TABLE` modifies an existing table's structure.
      - `DROP TABLE` deletes a table.
      - `CREATE INDEX` creates an index.
    - DDL commands affect the database schema, and changes made with DDL are typically permanent.

2.  **Data Manipulation Language (DML):**

    - Purpose: DML is used to manage and manipulate data stored within the database. It allows you to retrieve, insert, update, and delete data.
    - Commands: Common DML commands include `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
    - Examples:
      - `SELECT` retrieves data from one or more tables.
      - `INSERT` adds new records into a table.
      - `UPDATE` modifies existing records in a table.
      - `DELETE` removes records from a table.
    - DML commands operate on the data within the tables, and the changes are not necessarily permanent until a `COMMIT` is issued (as part of Transaction Control Language).

3.  **Data Control Language (DCL):**

    - Purpose: DCL is used for controlling access to data within the database, including granting or revoking permissions and privileges.
    - Commands: Common DCL commands include `GRANT` and `REVOKE`.
    - Examples:
      - `GRANT` allows a user or role specific privileges on database objects.
      - `REVOKE` removes previously granted privileges.
    - DCL commands are essential for managing data security and access control.

4.  **Transaction Control Language (TCL):**

    - Purpose: TCL is used to manage database transactions, which are sequences of one or more SQL statements treated as a single unit of work.
    - Commands: Common TCL commands include `COMMIT`, `ROLLBACK`, and `SAVEPOINT`.
    - Examples:
      - `COMMIT` saves changes made during a transaction to the database.
      - `ROLLBACK` undoes changes and cancels the transaction.
      - `SAVEPOINT` marks a point within a transaction to which you can later roll back.
    - TCL commands ensure data consistency and integrity during database transactions.

In summary, DDL manages the structure of the database, DML manipulates the data, DCL controls access and permissions, and TCL ensures transactional integrity. These categories encompass the core functionality of SQL in managing and interacting with a relational database system.

## Constrains

1.  **Data Definition Language (DDL):**

    - Purpose: DDL is used for defining and managing the structure of the database, including tables, schemas, indexes, and constraints.
    - Commands: Common DDL commands include `CREATE`, `ALTER`, `DROP`, and `TRUNCATE`.
    - Examples:
      - `CREATE TABLE` creates a new table.
      - `ALTER TABLE` modifies an existing table's structure.
      - `DROP TABLE` deletes a table.
      - `CREATE INDEX` creates an index.
    - DDL commands affect the database schema, and changes made with DDL are typically permanent.

2.  ** Data Manipulation Language (DML):**

    - Purpose: DML is used to manage and manipulate data stored within the database. It allows you to retrieve, insert, update, and delete data.
    - Commands: Common DML commands include `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
    - Examples:
      - `SELECT` retrieves data from one or more tables.
      - `INSERT` adds new records into a table.
      - `UPDATE` modifies existing records in a table.
      - `DELETE` removes records from a table.
    - DML commands operate on the data within the tables, and the changes are not necessarily permanent until a `COMMIT` is issued (as part of Transaction Control Language).

3.  **Data Control Language (DCL):**

        - Purpose: DCL is used for controlling access to data within the database, including granting or revoking permi1. Primary Key Constraint:

        - Ensures that each row in a table has a unique identifier.
        - The primary key constraint uniquely identifies each record in a table.
        - It enforces data integrity by preventing duplicate values in the primary key column(s).

    **Example:**

        `CREATE TABLE Employees (
        EmployeeID INT PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50)

    );`

4.  **Unique Constraint:**

        - Ensures that all values in a column or a group of columns are unique.
        - Unlike the primary key, a unique constraint allows for at least one NULL value in the column(s).

    **Example:**

        `CREATE TABLE Students (
        StudentID INT UNIQUE,
        FirstName VARCHAR(50),
        LastName VARCHAR(50)

    );`

5.  **Check Constraint:**

        - Defines a condition that must be satisfied for data to be inserted or updated in a column.
        - It is used to ensure that data meets specific criteria or conditions.

    **Example:**

        `CREATE TABLE Orders (
        OrderID INT,
        OrderDate DATE,
        OrderAmount DECIMAL,
        CONSTRAINT CHK_OrderAmount CHECK (OrderAmount >= 0)

    );`

6.  **Foreign Key Constraint:**

        - Establishes a link between data in two tables, ensuring referential integrity.
        - It enforces relationships between tables by specifying that the values in one column must match the values in another table's primary key.

    **Example:**

        `CREATE TABLE Orders (
        OrderID INT PRIMARY KEY,
        CustomerID INT,
        OrderDate DATE,
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)

    );`

7.  **Not Null Constraint:**

        - Ensures that a column does not contain NULL values.
        - It enforces that a value must be provided for that column when inserting data.

    **Example**

        `CREATE TABLE Products (
        ProductID INT PRIMARY KEY,
        ProductName VARCHAR(50) NOT NULL,
        Price DECIMAL

    );`

## Data Integrity

1.  **Data Integrity:**

    - Definition: Data integrity refers to the accuracy, consistency, and reliability of data in a database. It ensures that data is valid, complete, and in conformity with the defined rules and constraints.
    - Purpose: Maintaining data integrity is crucial to ensure that the data stored in a database is correct and trustworthy, which is essential for making informed decisions based on the data.
    - Methods: Data integrity is enforced through various means, including constraints, validation rules, and data quality checks.

2.  **Domain Integrity:**

    - Definition: Domain integrity is a subset of data integrity that focuses on the validity of data values within a specific column or attribute.
    - Purpose: It ensures that data values in a column are of the correct data type and adhere to any constraints or rules defined for that column.
    - Examples: Using data types, check constraints, and unique constraints to ensure that data within a column follows a specific format or set of rules.

3.  **Referential Integrity:**

    - Definition: Referential integrity ensures that relationships between tables in a relational database are maintained, meaning that foreign key values in one table match primary key values in another table.
    - Purpose: It enforces data consistency by preventing or controlling actions that would compromise the integrity of relationships between tables.
    - Examples: Defining foreign key constraints to enforce referential integrity, preventing the deletion of a record referenced by another table, and ensuring that the foreign key values exist in the referenced table.

4.  **User-Defined Integrity:**

    - Definition: User-defined integrity refers to specific rules, constraints, or logic that are defined by the user or the database designer to meet unique business or data quality requirements.
    - Purpose: It allows users to customize and enforce integrity rules that are not covered by standard database constraints.
    - Examples: Creating custom check constraints to enforce business rules, triggers that perform complex integrity checks, and stored procedures that validate data according to specific criteria.

## Data Types

### Integer

1. **INT (Integer):**

   - Size: 4 bytes.
   - Range: -2,147,483,648 to 2,147,483,647.
   - Commonly used for most integer values.

2. **BIGINT (Big Integer):**

   - Size: 8 bytes.
   - Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.
   - Used for very large integer values, such as primary keys or counters.

3. **TINYINT (Tiny Integer):**

   - Size: 1 byte.
   - Range: 0 to 255 or -128 to 127 (if signed).
   - Typically used for small integers or to save space in cases where a small range of values is sufficient.

4. **SMALLINT (Small Integer):**

   - Size: 2 bytes.
   - Range: -32,768 to 32,767.
   - Suitable for small integer values.

5. **NUMERIC and DECIMAL (Exact Numeric):**

   - These data types are used for exact numeric values, including integers and decimals.
   - You can specify the precision (total number of digits) and scale (number of decimal places) when defining these types.
   - Example: `NUMERIC(10, 2)` represents a number with 10 total digits and 2 decimal places.

6. **BIT (Bit):**

   - Typically used to store binary data or boolean values.
   - Can represent values of 0 or 1, or in some cases, true or false.

7. **SMALLMONEY:**

   - Size: 4 bytes.
   - Represents currency values with up to four decimal places.
   - Useful for applications where precision is required but with smaller values, like prices or financial transactions.

8. **MONEY:**

   - Size: 8 bytes.
   - Represents currency values with up to four decimal places.
   - Suitable for handling larger financial values.

### Float

- float
- real

### Date and Time

**datetime:**

- The `datetime` data type is used to store date and time values, including both the date and time of day with fractional seconds.
- It is capable of representing a wide range of dates and times, from January 1, 1753, through December 31, 9999.
- `datetime` typically stores the date and time to the precision of 3.33 milliseconds.

**smalldatetime:**

- `smalldatetime` is similar to `datetime` but with reduced precision.
- It is used to store date and time values with seconds rounded to the nearest minute.
- The range for `smalldatetime` is from January 1, 1900, through June 6, 2079.
- `smalldatetime` consumes 4 bytes of storage space, which is less than `datetime`.

**date:**

- The `date` data type is used for storing date values only, without the time component.
- It is designed for situations where you don't need to track the time of day, making it suitable for storing birthdates, event dates, etc.
- The `date` type typically provides a range from January 1, 0001, through December 31, 9999.

**time:**

- The `time` data type is used for storing time values without the date component.
- It can represent time durations or specific points in time during the day.
- `time` typically includes hours, minutes, seconds, and fractional seconds

### String

1.  **CHAR(n):**

        - The `CHAR` data type is used to store fixed-length character strings.
        - It requires you to specify the maximum number of characters `n` that the column can hold.
        - It pads the stored string with spaces to the fixed length.

        __Example:__

        `CREATE TABLE Employees (
        EmployeeID INT,
        LastName CHAR(50),
        FirstName CHAR(50)

    );`

2.  **VARCHAR(n):**

        - The `VARCHAR` data type is used to store variable-length character strings.
        - It also requires you to specify the maximum number of characters `n` that the column can hold, but it doesn't pad the stored string with spaces.

        __Example:__

        `CREATE TABLE Products (
        ProductID INT,
        ProductName VARCHAR(100),
        Description VARCHAR(255)

    );`

3.  **TEXT:**

        - The `TEXT` data type is used to store large blocks of text or character data.
        - It doesn't require you to specify a maximum length, making it suitable for storing long text content.

        __Example:__

        `CREATE TABLE Comments (
        CommentID INT,
        Author VARCHAR(50),
        CommentText TEXT

    );`

4.  **NCHAR(n):**

        - The `NCHAR` data type is similar to `CHAR` but is used to store fixed-length Unicode character strings.
        - It requires specifying the maximum number of characters `n`.

        __Example:__

        `CREATE TABLE UnicodeData (
        ID INT,
        UnicodeText NCHAR(100)

    );`

5.  **NVARCHAR(n):**

        - The `NVARCHAR` data type is similar to `VARCHAR` but is used to store variable-length Unicode character strings.
        - It requires specifying the maximum number of characters `n`.

        **Example:**

        `CREATE TABLE InternationalData (
        ID INT,
        Description NVARCHAR(255)

    );`

- Binary

  - binary <= 8000 bytes
  - varbinary <= 8000 bytes variable length
  - image

- Mixed

  - timestamp (updates automatically ?)
  - unique identifier

- Relations type
  - one to one
  - one to many
  - many to many

## Arithmetical operations

- -
- -
- -
- %

## Comparator operations

- =
- !=
- <>
- <=
- > =
- > = not less
- <= not greater

## Logic operators

- ALL
- AND
- ANY: compare two values con check if one is true
- BETWEEN
- EXISTS
- IN
- LIKE: like regex but with only to symbols
  - %
  - \_
- NOT: like ! in js
- OR
- IS NULL
- UNIQUE

## Expressions

```sql
SELECT *
FROM table
WHERE [conditional expression]
```

- logic
- numeric

- **Functions**

  - AVG()
  - SUM()
  - MIN()
  - MAX()
  - COUNT()
  - ROUND()
  - TRUNCATE()
  - CEILING()
  - FLOOR()
  - POWER()
  - SQRT()
  - RANDOM()

- `SUM(column)` calculates the sum of values in a column.
- `AVG(column)` calculates the average of values in a column.
- `COUNT(column)` counts the number of rows.
- `MAX(column)` finds the maximum value in a column.
- `MIN(column)` finds the minimum value in a column.
- `ROUND(value, decimal_places)` rounds a numeric value to a specified number of decimal places.

- String

  - CONCAT
  - LENGTH
  - TRIM
  - SUBSTRING
  - REPLACE
  - LOWER
  - UPPER

- Date
  - DAY OF MONTH
  - DAY OF WEEK
  - DAY OF YEAR
  - MONTH
  - YEAR
  - LAST_DAY
  - HOUR
  - MINUTE
  - SECOND
  - DATE_ADD
  - DATE_SUB
  - DATEDIFF
  - TIME_TO_SECOND

![Alt text](image.png)

## Create a DB

```sql
-- Create db
CREATE DATABASE IF NOT EXISTS <db>;

-- Show DBs
SHOW DATABASES;

-- Delete DB
DROP DATABASE IF EXISTS <db>;

-- Select db to use
USE <db>;
```

## Create a table

```sql
CREATE TABLE <tableName>(
    name varchar(50) NOT NULL,
    age INT,
    status VARCHAR(10),
    PRIMARY KEY (id)
)

-- Returns table description
DESC <tableName>;

-- Delete table
DROP table <tableName>
```

## Insert values into table

```sql
INSERT INTO <tableName>(
    col1, col2, col3,
    VALUES(val1, val2, val3)
);

-- Migrating table from another
INSERT INTO <tableName> [columnList]
SELECT [col1, col2, colN]
FROM <anotherTable>
WHERE condition
```

## Syntax of select

```sql
SELECT col1, col2, colN
FROM tableName

SELECT *
FROM tableName

SELECT col1, col2, colN
FROM tableName
WHERE condition
```

## Update a field

```sql
UPDATE tableName
SET col1 = val1, col2 = val2 ...
WHERE condition
```

## Delete records

```sql
DELETE FROM tableName
WHERE condition
```

## -

Sometimes we do not to take all values, maybe only some of them,

- TOP: allows to get the top elements (first created) from the table

  - SELECT TOP 3 \* FROM USERS;

- LIMIT:

  - SELECT \* FROM users LIMIT 15, 0 (gets first 15 rows)

  - SELECT \* FROM users LIMIT 15, 15 (gets 15 rows from the 15th row)

- ORDERBY: sort the results

  - SELECT col1, coln FROM tableName WHERE condition ORDERBY col1, col2 [asc | desc ]

- INNER JOIN
- OUTER JOIN
- LEFT JOIN
- RIGHT JOIN
- CROSS JOIN
