const coerceToType = require('../utils/coerceToType')

describe("Value to Number coercion", () => {
    
    test("Expect 125 to be 125", () => {
        expect(coerceToType(123)).toBe(125);
    })

    test("Expect BigInt(134) to be 134", () => {
        expect(coerceToType(134)).toBe(134);
    })

    test('Expect "-532" to be -532', () => {
        expect(coerceToType("-532")).toBe(-532);
    })
   
    test('Expect false to be 0', () => {
        expect(coerceToType(false)).toBe(0);
    })

    test('Expect ["5"] to be 5', () => {
        expect(coerceToType(["5"])).toBe(5);
    })

    test('Expect undefined to be an error', () => {
        expect(() => {
            coerceToType(undefined)})
            .toThrow('Can not convert to number.');
    });

    test('Expect NaN to be an error', () => {
        expect(() => {
            coerceToType(NaN)})
            .toThrow('Can not convert to number.');
    });

    test('Expect "-34A12" to be an error', () => {
        expect(() => {
            coerceToType("-34A12")})
            .toThrow('Can not convert to number.');
    });

    test('Expect {name: "John"} to be an error', () => {
        expect(() => {
            coerceToType({name: "John"})})
            .toThrow('Can not convert to number.');
    });

    test('Expect [1, 2, 3] to be an error', () => {
        expect(() => {
            coerceToType([1, 2, 3])})
            .toThrow('Can not convert to number.');
    });
   
});