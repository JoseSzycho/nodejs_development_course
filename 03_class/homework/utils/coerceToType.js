const coerceToType = (value, type) => {

    if(type === 'number') {
        const auxValue = Number(value);
        if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN, no coersion is possible
        return auxValue;
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
    
};

module.exports = coerceToType;