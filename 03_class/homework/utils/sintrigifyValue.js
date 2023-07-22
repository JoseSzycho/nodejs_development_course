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
            if(value instanceof Set) return Array.from(value).join(',');
            if(value instanceof Map) return JSON.stringify([...value]);
            return JSON.stringify(value); // for array, null, date, objects

        default: // if here, there is an unexpected case
            throw new TypeError(`Unexpected error with ${value} of type ${typeof value},
             copy paste this error and send to developer.`);
    }
};

module.exports = sintringifyValue;