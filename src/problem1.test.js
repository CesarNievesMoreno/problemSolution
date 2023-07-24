const { expect } = require('chai');
const list = require('./problem1');

// Test cases
describe('problem 1', () => {
  it('should return the correct indices for the first example', () => {
    const nums = [4,3,2,7,8,2,3,1];
    const result = list(nums);
    expect(result).to.deep.equal([5,6]);
  });

  it('should return the correct indices for the second example', () => {
    const nums = [1,1];
    const result = list(nums);
    expect(result).to.deep.equal([2]);
  });

  it('should return an empty array when no number is missing', () => {
    const nums = [1,2];
    const result = list(nums);
    expect(result).to.deep.equal([]);
  });
});
