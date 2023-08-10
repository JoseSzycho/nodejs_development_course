# Data transformation library

This library provides advanced data transformation functions.

```js
//Import example 1 - imports only a dessire function
const {addValues} = require('./index')
const value1 = 4;
const value2 = 8;
const result  = addValues(value1, value2)
console.log(result)
```
```js
//Import example 2 - imports all functions
const advancedTransformations = require('./index');
const sumResult  = advancedTransformations.addValues(2, 4);
const sumString = advancedTransformations.coerceToType(sumResult, 'string');
const invertedBoolean = advancedTransformations.invertBoolean(false);
const numSting = advancedTransformations.stringifyValue(431);
const number = advancedTransformations.convertToNumber('428');
```

__These functions are:__

## addValues()

The __addValues()__ functions accepts two values:
* __String__
* __Number__ 

And returns value1 + value2.

__In any other case, NaN or NULL__, it will throw an error.
error.

### Syntax

```js
addValue(value1, value2);
```

## stringifyValue()
The __stringifyValue()__ function accepts a single argument of any type and converts it to a string representation.

The behavior for different data types are the next:
* __Numbers:__ returns the stringified value. NaN is not accepted.
* __Strings:__ returns the same value.
* __undefined:__ throws an error. 
* __Symbol:__ returns "Symbol(<<valuee>value>)"
* __BigInt:__ returns the stringified value. NaN is not accepted.
* __Function:__ returns the code of the function
* __Boolean:__ returns "true" / "false"
* __Object:__
    * __null:__ returns "null"
    * __Other instances of object:__ returns JSON.stringify(value). [More about JSON.stringifify here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### Syntax
```js
stringifyValue(value);
```

## invertBoolean()

Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it throws an error.

### Syntax
```js
invertBoolean(value);
```

## convertToNumber()
 Accepts a single argument of any type and attempts to convert it to a number. 

The behavior for different data types are the next:

* __Numbers:__ it returns the same value (NaN is not accepted).
* __String:__ uses the parseFloat method and return the converte value if transformation is allowed. [More information about parseFloat() here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).
* __BigInt:__ returns the value to tumber.
* __Symbol:__ throws an error. 
* __Function:__ throws an error.
* __Undefined:__ throws an error.
* __Boolean:__ returns 1 or 0.
* __Objects:__
    * __null:__ returns 0

### Syntax
```js
convertToValue(value);
```

## coerceToType();

Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. 

The function only returns a value if convertion is possible when using the next specified types:

* __Number__
* __String__
* __Boolean__

The behavior for different data types are the next:

* __Any value to Number:__  it uses convertToNumber() behavior

* __Any value to Boolean:__ it uses Boolean() explicit coercion
    * __returns true for the next cases:__
        * 1
        * "1"
        * true
        * "true"

    * __returns false for the next cases:__
        * 0
        * "0"
        * false
        * "false"

    * __Other values will throw an error.__

* Any value to String: it uses stringifyValue() behavior


### Syntax
```js
coerceToType(value, 'number');
coerceToType(value, 'boolean');
coerceToType(value, 'string');
```



 

