const generateRandomNumber =  require('../scripts/generateRandomNumber'); //it generates a random number with a max number of digits
//const StringPrototype = require('../scripts/minusStringPrototype'); 
const maxDigitNumber = 24; //set the max number of digit for the random number (number of digits will be from 1 to maxDigitNumber)
const numberOfTests = 100; //number of test to be performed

for(let i = 0; i < numberOfTests; i ++){

    //generating random numbers with a random amount of digits
    let minuend = generateRandomNumber(maxDigitNumber);
    let substraend = generateRandomNumber(maxDigitNumber);

    //result using BigInt
    let resultMathLib = String(BigInt(minuend) - BigInt(substraend)); 

    //result usign minus prototype of String
  //  let resultStringMinus = minuend.minus(substraend); 

    describe('Test minus prototype and type of result', () => {
        test.skip(`Expect ${minuend} - ${substraend} to be ${resultMathLib}`, () => {
            expect(resultMathLib).toBe(resultStringMinus);
        });
    
        test.skip(`Expect result to be string`, () => {
            expect(typeof resultStringMinus).toBe("string");
        });
    });
}