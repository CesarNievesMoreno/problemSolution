const { expect } = require('chai');
const Sum = require('./problem2');

// Test cases
describe('problem ', () => {
  it('should return the correct indices for the first example', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = Sum(nums, target);
    expect(result).to.deep.equal([0,1]);
  });

  it('should return the correct indices for the second example', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = Sum(nums, target);
    expect(result).to.deep.equal([1,2]);
  });

  it('should return the correct indices for the third example', () => {
    const nums = [3, 3];
    const target = 6;
    const result = Sum(nums, target);
    expect(result).to.deep.equal([0,1]);
  });

  it('should return an empty array when no solution is found', () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = Sum(nums, target);
    expect(result).to.deep.equal([]);
  });
});
