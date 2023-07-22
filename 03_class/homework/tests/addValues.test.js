const addValues = require('../utils/addValues');

describe('Testing error scenarios', () => {

    test('One value is a NaN', () => {
        expect(() => {
            addValues(5, NaN)})
            .toThrow(TypeError)
    });

    test('One value is a undefined', () => {
        expect(() => {
            addValues(undefined, "hey")})
            .toThrow(TypeError)
    });

    test('Values are valid data types but are different types', () => {
        expect(() => {
            addValues(5, "hey")})
            .toThrow(TypeError)
    });

    test('One value is an array', () => {
        expect(() => {
            addValues(5, [5])})
            .toThrow(TypeError)
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
