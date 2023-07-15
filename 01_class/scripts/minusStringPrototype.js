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
    if(this.length > substraend.length) { //minuend is bigger
        auxMinuend = this.split('');          
        auxSubstraend = substraend.split(''); 
    } else if(substraend.length > this.length) { //substraend is bigger
        auxMinuend = substraend.split('');  
        auxSubstraend = this.split('');   
        isNegative = true;  
    } else { //they are same length, more observation is neccesary
        //we will check both numbers most significan digitis, the first number that
        //have a smaller digit is the smaller number
        for(let i = 0; i < this.length; i ++) {
            if(this[i] > substraend[i]){
                auxMinuend = this.split('');  //minuend is bigger        
                auxSubstraend = substraend.split(''); 
                break;
            } else if(substraend[i] > this[i]){
                auxMinuend = substraend.split(''); //substraend is bigger
                auxSubstraend = this.split('');
                break;  
            } else{ //they area equal, the result is 0
                return('0');
            }
        }
    }

    return '1234'
}

module.exports = String;