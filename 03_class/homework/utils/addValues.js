// Adds to values.
// It only work with String and Number data types
// Only returns if both values are equal and valid data type

const addValues = (value1, value2) => {
    
    // Throw error if data type is not valid
    const allowedTypes = [ 'number', 'string' ];
    if( allowedTypes.includes(typeof value1, typeof value2)){

        if(typeof(value1) != typeof(value2)) { // If data types are different
            throw new TypeError('Both values must be equal type.');
        }
        if(!(value1 == value1) || !(value2 == value2)) { // If values are NaN
            throw new TypeError('NaN is not valid for adding.');
        }
        
    } else {
        throw new TypeError('Value must be a number or string')
    }
    
    if(typeof value1 == 'number') return value1 + value2;
    if(typeof value2 == 'string') return value1.concat(value2);
 
    // If we are here, there is a bug
    throw new TypeError(
        `Unexpected error with ${value1} of type ${typeof value1}
        and ${value2} of type ${typeof value2},
        copy paste this error and send to developer.`);
}

module.exports = addValues;