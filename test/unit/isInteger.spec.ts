const isInteger = require('../../src/use-cases/isInteger');

describe('isInteger', () => {
  const integerNumbers = [-10, -1, 0, 1, 10];

  test.each(integerNumbers)('passes for integer value %j', (fixture) =>
    expect(isInteger(fixture)).toBe(true),
  );

  const notNumbers = ['A', 'B', 'C'];

  test.each(notNumbers)('fails for non-integer value %j', (fixture) => {
    expect(isInteger(fixture)).toBe(false);
  });
});
