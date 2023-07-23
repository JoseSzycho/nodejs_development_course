const convertToNumber = require('../utils/convertToNumber');


test('Expect 431 to be 431', () => {
    expect(convertToNumber(431))
    .toBe(431);
});

test('Expect "431 qw" to be 431', () => {
    expect(convertToNumber("431 qw"))
    .toBe(431);
});


test('Expect "431" to be 431', () => {
    expect(convertToNumber('431'))
    .toBe(431);
});

test('Expect "Hello World" to be an error"', () => {
    expect(() => {
        convertToNumber('Hello World')})
        .toThrow('Can not convert to number.');
});

test('Expect NaN to be an error', () => {
    expect(() => {
        convertToNumber(NaN)})
        .toThrow('Can not convert to number.');
});

test('Expect BigInt(543) to be 543', () => {
    expect(convertToNumber(BigInt(543)))
    .toBe(543);
});

test('Expect Symbol(1) to be an error', () => {
    expect(() => {
        convertToNumber(Symbol(1))})
        .toThrow('Can not convert to number.');
});

test('Expect "q 431" to be an error', () => {
    expect(() => {
        convertToNumber("q 431")})
        .toThrow('Can not convert to number.');
});

test('Expect function to be an error', () => {
    const func = () => {
        console.log("Hello World !");
    }
    expect(() => {
        convertToNumber(func)})
        .toThrow('Can not convert to number.');
});

test('Expect undefined to be an error', () => {
    expect(() => {
        convertToNumber(undefined)})
        .toThrow('Can not convert to number.');
});

test('Expect true to be 1', () => {
    expect(convertToNumber(true))
    .toBe(1);
});

test('Expect false to be 0', () => {
    expect(convertToNumber(false))
    .toBe(0);
});

test('Expect Set([1, 2, 3]) to be 123', () => {
    expect(convertToNumber(new Set([1, 2, 3])))
    .toBe(123);
});

test('Expect Set([1, "a", 3]) to be an error', () => {
    expect(() => {
        convertToNumber(new Set([1, 'a', 3]))})
        .toThrow('Can not convert to number.');
});

test('Expect Map.. to be 456', () => {
    const myMap = new Map();
    myMap.set('1', 4);
    myMap.set('b', 5);
    myMap.set('3', 6);
    expect(convertToNumber(myMap))
    .toBe(456);
});

test('Expect Map... to an error', () => {
    const myMap = new Map();
    myMap.set('1', 4);
    myMap.set('2', "a");
    myMap.set('3', 6);
    expect(() => {
        convertToNumber(myMap)})
        .toThrow('Can not convert to number.');
});


test('Expect array [1, 2, 3, 4] to be 1234', () => {
    expect(convertToNumber([1, 2, 3, 4]))
    .toBe(1234);
});

test('Expect array [1, "a", 3] to be an error', () => {
    expect(() => {
        convertToNumber([1, 'a', 3])})
        .toThrow('Can not convert to number.');
});

test('Expect null to be 0', () => {
    expect(convertToNumber(null))
    .toBe(0);
});

test('Expect objet to be 456', () => {
    let obj = {
        a: 4,
        b: 5,
        c: 6
    }
    expect(convertToNumber(obj))
    .toBe(456);
});

test('Expect object to an error', () => {
    let obj = {
        a: 4,
        b: 'b',
        c: 6
    }
    expect(() => {
        convertToNumber(obj)})
        .toThrow('Can not convert to number.');
});
