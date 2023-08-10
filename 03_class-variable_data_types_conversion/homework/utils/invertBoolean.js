const invertBoolean = (value) => {
    if(typeof value !== 'boolean') throw new TypeError('Value must be boolean type.');
    return !value;
}

module.exports = invertBoolean;