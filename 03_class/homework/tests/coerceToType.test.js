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

    test('Expect null to be 0', () => {
        expect(coerceToType(null, 'number')).toBe(0);
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
    test('Expect 435 to be "453"', () => {
        expect(coerceToType(453, 'string')).toBe('453');
    })

    test('Expect true to be "true"', () => {
        expect(coerceToType(true, 'string')).toBe('true');
    })

    test('Expect false to be "false"', () => {
        expect(coerceToType(false, 'string')).toBe('false');
    })

    test('Expect [1,2,3] to be "1,2,3"', () => {
        expect(coerceToType([1,2,3], 'string')).toBe("1,2,3");
    })

    test('Expect BigInt(478) to be "478"', () => {
        expect(coerceToType(BigInt(478), 'string')).toBe('478');
    })

    test('Expect null to be "null"', () => {
        expect(coerceToType(null, 'string')).toBe('null');
    })

    test('Expect undefined to be an error', () => {
        expect(() => {
            coerceToType(undefined, 'string')})
            .toThrow('Can not convert to string.');
    });

    test('Expect Obj to be an error', () => {
        expect(() => {
            const obj = {
                name: 'Jose'
            }
            coerceToType(obj, 'string')})
            .toThrow('Can not convert to string.');
    });
});