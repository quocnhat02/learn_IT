// business has given us requirements to
// write a math module that sum, divides, multiply, subtract

const sum = require('./sum');

// describe test expect
describe('Math Module Tests', () => {
  test('As a user I want to sum 2 numbers', () => {
    expect(sum(3, 5)).toEqual(8);
  });
});
