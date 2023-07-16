const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
const StringPrototype = require('../scripts/plusStringPrototype'); 
const maxDigitNumber = 100; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 1000; //number of test to be performed

describe('Test plus prototype and type of result', () => {
    for(let i = 0; i < numberOfTests; i ++){

        //generating random numbers with a random amount of digits
        let firstAddend = generateRandomNumber(maxDigitNumber);
        let secondAddend = generateRandomNumber(maxDigitNumber);

        //result using BigInt
        let resultMathLib = String(BigInt(firstAddend) + BigInt(secondAddend)); 

        //result usign plus prototype of String
        let resultStringPlus = firstAddend.plus(secondAddend); 

        
            test(`Expect ${firstAddend} + ${secondAddend} to be ${resultMathLib}`, () => {
                expect(resultMathLib).toBe(resultStringPlus);
            });
        
            test(`Expect result to be string`, () => {
                expect(typeof resultStringPlus).toBe("string");
            });
        
    }
});