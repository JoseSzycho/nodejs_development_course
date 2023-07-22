const sintringifyValue = (value) => {
    const valueType = typeof value;

    switch(valueType){
        case 'number': 
            if(!(value == value)) throw new TypeError('NaN is not valid for converting to string.');
            return value.toString();
        
        case 'string':
            return value;

        case 'boolean':
            return String(value);

        case 'null' // ver que tmb es objecto

    }
};

module.exports = sintringifyValue;