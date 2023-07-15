String.prototype.minus = function(substraend){

    let numberOfOperations = 0; //number of operation it will be performed
    let rest = [];   //total of the substraction
    let borrow = 0;  //if partial substraction, if substraend > minuend, minuend borrow one unit to its most significan neighbor
    
    //if substraend > minuend, the result will be negative, so we change order
    //between the operators, the minuend will be the auxSubstraend, and the
    //substraend will be the auxMinuend, so we will always perform rest = auxMinuend - auxSubstraend,
    //and we will add the negative simbol becouse we know the number is negative.
    let isNegative = false; 
    let auxMinuend; 
    let auxSubstraend;
    
    //checking which number is bigger
    if(this.length > substraend.length){
        auxMinuend = this.split('');          //converting string to array 
        auxSubstraend = substraend.split(''); //converting string to array 
    }
    else if(substraend.length > this.length){
        auxMinuend = substraend.split('');  //converting string to array
        auxSubstraend = this.split('');     //converting string to array
    }

    return '1234'
}

module.exports = String;