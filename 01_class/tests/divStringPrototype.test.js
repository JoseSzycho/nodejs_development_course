const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
const StringPrototype = require('../scripts/divStringPrototype'); 
const maxDigitNumber = 3; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 1; //number of test to be performed

describe('Test divide prototype and type of result', () => {
    for(let i = 0; i < numberOfTests; i ++){

        //generating random numbers with a random amount of digits
        let divisor = generateRandomNumber(maxDigitNumber);
        let dividend = generateRandomNumber(maxDigitNumber);

        divisor = '5';
        dividend = '200';
        //result using BigInt
        let resultMathLib = String(BigInt(dividend) / BigInt(divisor)); 

        //result usign plus prototype of String
        let resultStringDivide = dividend.div(divisor); 

        
            test(`Expect ${dividend} / ${divisor} to be ${resultMathLib}`, () => {
                expect(resultStringDivide).toBe(resultMathLib);
            });
        
            test(`Expect result to be string`, () => {
                expect(typeof resultStringDivide).toBe("string");
            });
        
    }
});