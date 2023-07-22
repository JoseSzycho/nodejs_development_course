// Adds to values.
// It only work with String and Number
// Only returns if both values are equal type

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
 
}

module.exports = addValues;