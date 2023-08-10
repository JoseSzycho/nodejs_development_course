const sintringifyValue = (value) => {
    const valueType = typeof value;

    if(value === null) return 'null';
    if(valueType == Object) return JSON.stringify(value);  
    if(value == undefined || !(value == value)) throw new TypeError('Value not valid for converting to string.');
    
    return String(value);
    
};

module.exports = sintringifyValue;