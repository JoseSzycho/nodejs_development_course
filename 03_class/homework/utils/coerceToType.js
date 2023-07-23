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

    if(type === 'string') {
        const valueType = typeof value;
        switch(valueType){
            case 'number':
                if(!(value == value)) throw new TypeError('Can not convert to string.');
            case 'string':
            case 'bigint':
            case 'boolean':
                return String(value);

            case 'object':
                if(value instanceof Array) return String(value);
                if(value == null) return String(value);
                throw new TypeError('Can not convert to string.');
            
            default:
                throw new TypeError('Can not convert to string.');
        }
    }
    
};

module.exports = coerceToType;