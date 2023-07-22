const sintringifyValue = require('../utils/sintrigifyValue');

test('Return something', () => {
    expect(sintringifyValue(5))
    .toBe(5);
});