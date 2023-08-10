// Adds to values if they are string or number

const addValues = (value1, value2) => {
    
    // Throw error if data type is not valid
    const allowedTypes = [ 'number', 'string' ];
    if( allowedTypes.includes(typeof value1, typeof value2)){

        if(!(value1 == value1) || !(value2 == value2)) { // If values are NaN
            throw new TypeError('NaN is not valid for adding.');
        }

        return value1 + value2;
        
    } else {
        throw new TypeError('Value must be a number or string')
    }
    
}

module.exports = addValues;