const sintringifyValue = require('../utils/sintrigifyValue');

test('Expect 431 to be "431"', () => {
    expect(sintringifyValue(431))
    .toBe('431');
});

test('Expect NaN to string be an error', () => {
    expect(() => {
        sintringifyValue(NaN)})
        .toThrow('NaN is not valid for converting to string');
});

test('Expect undefined to string be an error', () => {
    expect(() => {
        sintringifyValue(undefined)})
        .toThrow('There is no value for converting to string.');
});

test('Expect "Hello World" to be "Hello World"', () => {
    expect(sintringifyValue('Hello World'))
    .toBe('Hello World');
});

test('Expect Symbol("newKey") to be "Symbol(newKey)"', () => {
    expect(sintringifyValue(Symbol("newKey")))
    .toBe('Symbol(newKey)');
});

test('Expect BigInt(543) to be "543"', () => {
    expect(sintringifyValue(BigInt(543)))
    .toBe('543');
});

test('Expect function to return the function code', () => {
    const func = () => {
        console.log("Hello World !");
    }
    expect(sintringifyValue(func))
    .toBe(String(func));
});

test('Expect true to be "true"', () => {
    expect(sintringifyValue(true))
    .toBe('true');
});

test('Expect false to be "false"', () => {
    expect(sintringifyValue(false))
    .toBe('false');
});

test('Expect Set([1, 2, 3]) to be "1,2,3"', () => {
    expect(sintringifyValue(new Set([1, 2, 3])))
    .toBe('1,2,3');
});

test('Expect Map([4, 5, 6]) to be "1,4,2,5,3,6"', () => {
    const myMap = new Map();
    myMap.set('1', 4);
    myMap.set('2', 5);
    myMap.set('3', 6);
    expect(sintringifyValue(myMap))
    .toBe('1,4,2,5,3,6');
});

test('Expect null to be "null', () => {
    expect(sintringifyValue(null))
    .toBe('null');
});

test('Expect [1, 2, 3, 4] to be "1,2,3,4', () => {
    expect(sintringifyValue([1, 2, 3, 4]))
    .toBe('[1,2,3,4]');
});






