const sintringifyValue = (value) => {
    const valueType = typeof value;

    switch(valueType){
        case 'number': 
            if(!(value == value)) throw new TypeError('NaN is not valid for converting to string.');
            return value.toString();
        
        case 'string':
            return value;

        case 'undefined':
            throw new TypeError('There is no value for converting to string.');

        case 'symbol':

        case 'bigint':
            
        case 'function':

        case 'boolean':
            return String(value);

        case 'object':
            const setOrMaptoArray = (value) => {
                return Array.from(value).join(',')
            }
            if(value instanceof Set) return setOrMaptoArray(value);
            if(value instanceof Map) return setOrMaptoArray(value);
            return JSON.stringify(value); // for array, null, date, objects

        default:
            throw new TypeError(`Unexpected error with ${value} of type ${typeof value},
             copy paste this error and send to developer.`);
    }
};

module.exports = sintringifyValue;