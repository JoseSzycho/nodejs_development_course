const {invertBoolean} = require('../index');

test('Expect false to be true', () => {
    expect(invertBoolean(false)).toBe(true);
});

test('Expect true to be false', () => {
    expect(invertBoolean(true)).toBe(false);
});

test('Expect number 0 to be error', () => {
    expect(() => {
        invertBoolean(0)})
        .toThrow('Value must be boolean type.');
});

test('Expect number 1 to be error', () => {
    expect(() => {
        invertBoolean(1)})
        .toThrow('Value must be boolean type.');
});

test('Expect string "1" to be error', () => {
    expect(() => {
        invertBoolean('1')})
        .toThrow('Value must be boolean type.');
});

test('Expect string "0" to be error', () => {
    expect(() => {
        invertBoolean('0')})
        .toThrow('Value must be boolean type.');
});

test('Expect array [] to be error', () => {
    expect(() => {
        invertBoolean('[]')})
        .toThrow('Value must be boolean type.');
});

test('Expect array [1] to be error', () => {
    expect(() => {
        invertBoolean('[1]')})
        .toThrow('Value must be boolean type.');
});

test('Expect array [0] to be error', () => {
    expect(() => {
        invertBoolean('[0]')})
        .toThrow('Value must be boolean type.');
});