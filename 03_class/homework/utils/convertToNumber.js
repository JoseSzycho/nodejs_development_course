const convertToNumber = (value) => {
    const valueType = typeof value;
    let auxValue;
    let auxValue2 = [];

    switch(valueType){
        case 'number':
            if(!(value == value)) throw new TypeError('Can not convert to number.'); // if NaN
            return value;
        
        case 'string':
            auxValue = Number(value);
            if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
            return Number(auxValue);
        
        case 'bigint':
            return Number(value);

        case 'symbol':
        case 'function':
        case 'undefined':
            throw new TypeError('Can not convert to number.');

        case 'boolean':
            return Number(value);

        case 'object':

            if(value instanceof Set){
                value.forEach((el) => {
                    auxValue2.push(el)
                });
                auxValue = Number(auxValue2.join(''));
                if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
                return auxValue;
            }

            if(value instanceof Map){
                value.forEach((value, key) => {
                    auxValue2.push(value)
                });
                auxValue = Number(auxValue2.join(''));
                if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
                return auxValue;
            }

            if(value instanceof Array){
                auxValue = Number(value.join(''));
                if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
                return auxValue;
            }

            if(value == null) return Number(null);

            if(value instanceof Object){
                const objValues = Object.values(value);
                for (const objValue of objValues) {
                    auxValue2.push(objValue);
                }
                auxValue = Number(auxValue2.join(''));
                if(!(auxValue == auxValue)) throw new TypeError('Can not convert to number.'); // if NaN
                return auxValue;
            }

    }
}

module.exports = convertToNumber;