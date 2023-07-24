// Adds to values.
// It only work with String and Number data types
// Only returns if both values are equal and valid data type

const addValues = (value1, value2) => {
    
    // Function that throw error if data type is not valid
    const checkType = (value) => {
        if(typeof value == 'string') return; // valid data type
        if(typeof value == 'number') {
           if(!(value == value)) throw new TypeError('NaN is not valid for adding.');
           return; // valid data type
        }
        
        // If here, it is not a valid data type
        throw new TypeError('Value must be a number or string');
    }

    // Cecking if errror must be thrown
    checkType(value1);
    checkType(value2);
    if(typeof(value1) != typeof(value2)) throw new TypeError('Both values must be equal type.');
    
    if(typeof value1 == 'number') return value1 + value2;
    if(typeof value2 == 'string') return value1.concat(value2);
 
    // If we are here, there is a bug
    throw new TypeError(
        `Unexpected error with ${value1} of type ${typeof value1}
        and ${value2} of type ${typeof value2},
        copy paste this error and send to developer.`);
}

module.exports = addValues;