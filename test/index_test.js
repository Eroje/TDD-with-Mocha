const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      // Setup
      const inputArray = [1,2,3]
      const expectedResult = 6;

      // Excercise
      const actualResult = Calculate.sum(inputArray)

      //Verification
      assert.strictEqual(actualResult, expectedResult);
    });

    it('returns the sum of a four item list', () => {
        // Setup
        const inputArray = [4,5,6,7]
        const expectedResult = 22;
  
        // Excercise
        const actualResult = Calculate.sum(inputArray)
  
        //Verification
        assert.strictEqual(actualResult, expectedResult);
    });

    it('returns zero when the array is empty', ()=>{
        // Setup
        const inputArray = [];
        const expectedResult = 0;
        
        // Exercise
        const actualResult = Calculate.sum(inputArray);

        // Verification
        assert.strictEqual(actualResult, expectedResult)
     });
 });

});
