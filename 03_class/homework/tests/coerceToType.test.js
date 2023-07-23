const coerceToType = require('../utils/coerceToType')

describe("Value to Number coercion", () => {
    
    test("Expect 125 to be 125", () => {
        expect(coerceToType(125, 'number')).toBe(125);
    })

    test("Expect BigInt(134) to be 134", () => {
        expect(coerceToType(134, 'number')).toBe(134);
    })

    test('Expect "-532" to be -532', () => {
        expect(coerceToType("-532", 'number')).toBe(-532);
    })
   
    test('Expect false to be 0', () => {
        expect(coerceToType(false, 'number')).toBe(0);
    })

    test('Expect ["5"] to be 5', () => {
        expect(coerceToType(["5"], 'number')).toBe(5);
    })

    test('Expect true to be 1', () => {
        expect(coerceToType(true, 'number')).toBe(1);
    })

    test('Expect false to be 0', () => {
        expect(coerceToType(false, 'number')).toBe(0);
    })

    test('Expect undefined to be an error', () => {
        expect(() => {
            coerceToType(undefined, 'number')})
            .toThrow('Can not convert to number.');
    });

    test('Expect NaN to be an error', () => {
        expect(() => {
            coerceToType(NaN, 'number')})
            .toThrow('Can not convert to number.');
    });

    test('Expect "-34A12" to be an error', () => {
        expect(() => {
            coerceToType("-34A12", 'number')})
            .toThrow('Can not convert to number.');
    });

    test('Expect {name: "John"} to be an error', () => {
        expect(() => {
            coerceToType({name: "John"}, 'number')})
            .toThrow('Can not convert to number.');
    });

    test('Expect [1, 2, 3] to be an error', () => {
        expect(() => {
            coerceToType([1, 2, 3], 'number')})
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

});

