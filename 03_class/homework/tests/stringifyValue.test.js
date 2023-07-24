const {stringifyValue} = require('../index');

test('Expect 431 to be "431"', () => {
    expect(stringifyValue(431))
    .toBe('431');
});

test('Expect NaN to string be an error', () => {
    expect(() => {
        stringifyValue(NaN)})
        .toThrow('NaN is not valid for converting to string');
});

test('Expect undefined to string be an error', () => {
    expect(() => {
        stringifyValue(undefined)})
        .toThrow('There is no value for converting to string.');
});

test('Expect "Hello World" to be "Hello World"', () => {
    expect(stringifyValue('Hello World'))
    .toBe('Hello World');
});

test('Expect Symbol("newKey") to be "Symbol(newKey)"', () => {
    expect(stringifyValue(Symbol("newKey")))
    .toBe('Symbol(newKey)');
});

test('Expect BigInt(543) to be "543"', () => {
    expect(stringifyValue(BigInt(543)))
    .toBe('543');
});

test('Expect function to return the function code', () => {
    const func = () => {
        console.log("Hello World !");
    }
    expect(stringifyValue(func))
    .toBe(String(func));
});

test('Expect true to be "true"', () => {
    expect(stringifyValue(true))
    .toBe('true');
});

test('Expect false to be "false"', () => {
    expect(stringifyValue(false))
    .toBe('false');
});

test('Expect Set([1, 2, 3]) to be "1,2,3"', () => {
    expect(stringifyValue(new Set([1, 2, 3])))
    .toBe('1,2,3');
});

test('Expect Map([4, 5, 6]) to be "1,4,2,5,3,6"', () => {
    const myMap = new Map();
    myMap.set('1', 4);
    myMap.set('2', 5);
    myMap.set('3', 6);
    expect(stringifyValue(myMap))
    .toBe('[["1",4],["2",5],["3",6]]');
});

test('Expect null to be "null', () => {
    expect(stringifyValue(null))
    .toBe('null');
});

test('Expect [1, 2, 3, 4] to be "1,2,3,4"', () => {
    expect(stringifyValue([1, 2, 3, 4]))
    .toBe('[1,2,3,4]');
});






