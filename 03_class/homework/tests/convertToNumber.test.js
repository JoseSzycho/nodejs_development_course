const {convertToNumber} = require('../index');

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



test('Expect null to be 0', () => {
    expect(convertToNumber(null))
    .toBe(0);
});




