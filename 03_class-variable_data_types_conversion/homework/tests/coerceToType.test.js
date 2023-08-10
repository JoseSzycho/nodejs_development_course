const {coerceToType} = require('../index');

describe("Value to Number coercion", () => {
    
    // just fort checking the library is correctyle imported, as we use convertToNumber()
    test("Expect 125 to be 125", () => {
        expect(coerceToType(125, 'number')).toBe(125);
    })
    test('Expect "fae" to be an error', () => {
        expect(() => {
            coerceToType("fae", 'number')})
            .toThrow('Can not convert to number.');
    });

});


describe("Value to Boolean coercion", () => {

    test("Expect 1 to be true", () => {
        expect(coerceToType(1, 'boolean')).toBe(true);
    })

    test('Expect "1" to be true', () => {
        expect(coerceToType('1', 'boolean')).toBe(true);
    })

    test('Expect "true" to be true', () => {
        expect(coerceToType("true", 'boolean')).toBe(true);
    })

    test('Expect true to be true', () => {
        expect(coerceToType(true, 'boolean')).toBe(true);
    })

    test("Expect 0 to be false", () => {
        expect(coerceToType(0, 'boolean')).toBe(false);
    })

    test('Expect "0" to be false', () => {
        expect(coerceToType('0', 'boolean')).toBe(false);
    })

    test('Expect "false" to be false', () => {
        expect(coerceToType("false", 'boolean')).toBe(false);
    })

    test('Expect false to be false', () => {
        expect(coerceToType(false, 'boolean')).toBe(false);
    })

    test('Expect [1] to be an error', () => {
        expect(() => {
            coerceToType([1], 'boolean')})
            .toThrow('Can not convert to boolean.');
    });

    test('Expect " " to be an error', () => {
        expect(() => {
            coerceToType(" ", 'boolean')})
            .toThrow('Can not convert to boolean.');
    });

    test('Expect undefined to be an error', () => {
        expect(() => {
            coerceToType(undefined, 'boolean')})
            .toThrow('Can not convert to boolean.');
    });

    test('Expect null to be an error', () => {
        expect(() => {
            coerceToType(null, 'boolean')})
            .toThrow('Can not convert to boolean.');
    });

    test('Expect NaN to be an error', () => {
        expect(() => {
            coerceToType(NaN, 'boolean')})
            .toThrow('Can not convert to boolean.');
    });

});

describe("Value to String coercion", () => {
    // Just for checking the function is correctly imported, as we use stringifyValue()
    test('Expect 435 to be "453"', () => { 
        expect(coerceToType(453, 'string')).toBe('453');
    })

});