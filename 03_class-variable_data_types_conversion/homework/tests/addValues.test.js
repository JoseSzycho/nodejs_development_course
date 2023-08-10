const {addValues} = require('../index');

describe('Testing error scenarios', () => {

    test('Second value is a NaN', () => {
        expect(() => {
            addValues(5, NaN)})
            .toThrow('NaN is not valid for adding.')
    });

    test('First value is a NaN', () => {
        expect(() => {
            addValues(NaN, 5)})
            .toThrow('NaN is not valid for adding.')
    });

    test('One value is a undefined', () => {
        expect(() => {
            addValues(undefined, "hey")})
            .toThrow('Value must be a number or string')
    });

    test('Expect [5,4] + "bar" to be error', () => {
        expect(() => {
            addValues([5, 4], "bar")})
            .toThrow('Value must be a number or string')
    });

});

describe('Testing functional escenarios', () => {

    test('Expect 5 + 82 to be 87', () => {
        expect(addValues(5, 82))
        .toBe(87);
    });

    test('Expect "foo" + "bar" to be "foobar', () => {
        expect(addValues('foo', 'bar'))
        .toBe('foobar');
    });

    test('Expect 5 + "bar" to be "5bar"', () => {
        expect(addValues(5, 'bar'))
        .toBe('5bar');
    });

    test('Expect 5 + "3" to be "53"', () => {
        expect(addValues(5, "3"))
        .toBe('53');
    });

    test('Expect 5 + [33] to be "533"', () => {
        expect(addValues(5, [33]))
        .toBe('533');
    });

});
