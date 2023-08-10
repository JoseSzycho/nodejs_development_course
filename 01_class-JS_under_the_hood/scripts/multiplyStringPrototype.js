String.prototype.multiply = function(multiplier) {
    multiplicand = this.split('');     
    multiplier = multiplier.split('');
    let carry = 0;

    //As is made the algorithm, it is not need to remove initials zeros sent by user

    //creating empty array with zeros with expected result size, it have zeros
    //in order to use them for operations, as partial operations are stored there
    let result = new Array(multiplier.length + multiplicand.length).fill(0); 

    //transversing multiplicand and multipler from back to front, for performing
    //partials operations fromthe las digits to the first digits
    for(let j = multiplier.length - 1; j >= 0; j--) {

        for(let k = multiplicand.length - 1; k >= 0; k-- ) {
            
            //partial result, if we have carry from another operation, we add it.
            //It is converted to string in order to take the units and tens, 
            //as we cannot use math library
            let partialResult = String(Number(multiplier[j]) * Number(multiplicand[k]) + result[j + k + 1] + carry);
            
            //in this condition is we need to check if it's necessary to handle a carry
            if(partialResult.length == 2) {
                result[j + k + 1] = Number(partialResult[1]);
                carry = Number(partialResult[0]);
            } else{
                result[j + k + 1] = Number(partialResult[0]);
                carry = 0;
            }        
        }
        //if multplicand is transversed and we have a carry, we need to add it
        //as the most significant digit of this run
        if(carry) {
            result[j] = carry;
            carry = 0;
        }
    }

     //removing unnecesary zeros, as we start with an array filled with zeros, if most signficant
     //digit are not overloaded, we have to remove them
    while(result[0] === 0 && result.length > 1){ 
        result.shift();                       
    }

    result = result.join('');
    return result;
};

module.exports = String;