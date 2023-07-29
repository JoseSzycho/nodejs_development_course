const createCounter = () => {
    let count = 0;
    const incrementedCount = () => {
        count++;
        return count;
    }
    return incrementedCount;
};

module.exports = createCounter;