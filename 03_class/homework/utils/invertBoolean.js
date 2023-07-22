const invertBoolean = (value) => {
    if(typeof value !== 'bolleand') throw new TypeError('Value must be boolean type.');
    if(value === true) return false;
    if(value === false) return true;

    // If here, there is a bug
    throw new TypeError(`Unexpected error with ${value} of type ${typeof value},
             copy paste this error and send to developer.`);
}

module.exports = invertBoolean;