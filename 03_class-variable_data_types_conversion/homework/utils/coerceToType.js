const coerceToType = (value, type) => {

    const {convertToNumber, stringifyValue} = require('../index');

    if(type === 'number') {
        return convertToNumber(value);
    }

    if(type === 'boolean')  {

        switch(value) {
            case 1:
            case '1':
            case true:
            case 'true':
                return true;

            case 0:
            case '0':
            case false:
            case 'false':
                return false;

            default: 
                throw new TypeError('Can not convert to boolean.');
        }
    }

    if(type === 'string') {
       return stringifyValue(value);
    }
    
};

module.exports = coerceToType;