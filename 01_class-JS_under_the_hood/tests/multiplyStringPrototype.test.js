const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
const StringPrototype = require('../scripts/multiplyStringPrototype'); 
const maxDigitNumber = 60; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 9999; //number of test to be performed


describe('Test multiply prototype and type of result', () => {
    for(let i = 0; i < numberOfTests; i ++){

        //generating random numbers with a random amount of digits
        let multiplicand = generateRandomNumber(maxDigitNumber);
        let multiplier = generateRandomNumber(maxDigitNumber);

        //result using BigInt
        let resultMathLib = String(BigInt(multiplicand) * BigInt(multiplier)); 

        //result usign multiply prototype of String
        let resultStringMultiply = multiplicand.multiply(multiplier); 

            test(`Expect ${multiplicand} * ${multiplier} to be ${resultMathLib}`, () => {
                expect(resultStringMultiply).toBe(resultMathLib);
            });

            test(`Expect result to be string`, () => {
                expect(typeof resultStringMultiply).toBe("string");
            });
        
    }

});