const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
const StringPrototype = require('../scripts/divideStringPrototype'); 
const maxDigitNumber = 100; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 10000; //number of test to be performed

describe('Test divide prototype and type of result', () => {
    for(let i = 0; i < numberOfTests; i ++){

        //generating random numbers with a random amount of digits
        let divisor = generateRandomNumber(maxDigitNumber);
        let dividend = generateRandomNumber(maxDigitNumber);

        //result using BigInt
        let resultMathLib = String(BigInt(divisor) / BigInt(dividend)); 

        //result usign plus prototype of String
        let resultStringDivide = divisor.plus(dividend); 

        
            test(`Expect ${divisor} / ${dividend} to be ${resultMathLib}`, () => {
                expect(resultStringDivide).toBe(resultMathLib);
            });
        
            test(`Expect result to be string`, () => {
                expect(typeof resultStringDivide).toBe("string");
            });
        
    }
});