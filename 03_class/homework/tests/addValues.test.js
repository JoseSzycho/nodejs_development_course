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

    test('Values are valid data types but are different types', () => {
        expect(() => {
            addValues("hey", 5)})
            .toThrow('Both values must be equal type.')
    });

    test('One value is an array', () => {
        expect(() => {
            addValues(5, [5])})
            .toThrow('Both values must be equal type.')
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

});
