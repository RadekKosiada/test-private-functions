const { sum, mul, myModule } = require('./script.js');

test('Adding 1 + 1 equals 2', () => {
    expect(sum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(1)
})
test('Adding 2 +3 equals 5'), () => {
    expect(myModule(2,3)).toBe(5)
}
