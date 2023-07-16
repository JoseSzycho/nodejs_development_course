const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
const StringPrototype = require('../scripts/minusStringPrototype'); 
const maxDigitNumber = 100; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 1000; //number of test to be performed

describe('Test minus prototype and type of result', () => {
    for(let i = 0; i < numberOfTests; i ++){

        //generating random numbers with a random amount of digits
        let minuend = generateRandomNumber(maxDigitNumber);
        let substraend = generateRandomNumber(maxDigitNumber);

        //result using BigInt
        let resultMathLib = String(BigInt(minuend) - BigInt(substraend)); 

        //result usign minus prototype of String
        let resultStringMinus = minuend.minus(substraend); 

        
            test(`Expect ${minuend} - ${substraend} to be ${resultMathLib}`, () => {
                expect(resultStringMinus).toBe(resultMathLib);
            });

            test(`Expect result to be string`, () => {
                expect(typeof resultStringMinus).toBe("string");
            });
        
    }
});