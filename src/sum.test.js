const sum = require('./sum');

test('1 + 2 が 3になること', () => {
  expect(sum(1, 2)).toBe(3);
});
