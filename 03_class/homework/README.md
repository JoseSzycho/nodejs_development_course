# Data transformation library

This library provides advanced data transformation functions.

__These functions are:__

## addValues()

The __addValues()__ functions accepts two values, if both values are:
* __String:__ returns value1 concatenated value 2
* __Number__ (NaN not accepted), returns value1 + value2

__In any other case__, it will throw an error.
error.

### Syntax

```js
addValue(value1, value2);
```

## stringifyValues()
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
    * __Set:__ returns the values separated by comma
    * __Map:__ returns the result in next format: [["<<valuee>key1>",<<valuee>value1>],["<<valuee>key2>",<<valuee>value2>],...,["<<valuee>keyN>"<<valuee>valueN>]]
    * __null:__ returns "null"
    * __Other instances of object:__ returns JSON.stringify(value). [More about JSON.stringifify here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

