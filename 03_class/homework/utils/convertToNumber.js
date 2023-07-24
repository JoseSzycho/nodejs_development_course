const convertToNumber = (value) => {
    const valueType = typeof value;
    let auxValue;
    let auxValue2 = [];

    if(value === null) return 0;

    switch(valueType){
        case 'number':
            if(!(value == value)) throw new TypeError('Can not convert to number.'); // if NaN
            return value;
        
        case 'string':
            auxValue = parseFloat(value);
            if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
            return Number(auxValue);
        
        case 'bigint':
            return Number(value);

        case 'boolean':
            return Number(value);

        case 'object':
        case 'symbol':
        case 'function':
        case 'undefined':
            throw new TypeError('Can not convert to number.');

        default:
            // If here, there is a bug.
            throw new TypeError(`Unexpected error with ${value} of type ${typeof value},
            copy paste this error and send to developer.`);
    }
}

module.exports = convertToNumber;