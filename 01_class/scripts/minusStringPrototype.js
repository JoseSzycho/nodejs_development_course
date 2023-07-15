String.prototype.minus = function(substraend){

    let numberOfOperations = 0; //number of operation it will be performed
    let rest = [];   //total of the substraction
    
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
            if(this[i] > substraend[i]){    //minuend is bigger 
                auxMinuend = this.split('');         
                auxSubstraend = substraend.split(''); 
                break;
            } else if(substraend[i] > this[i]){ //substraend is bigger
                auxMinuend = substraend.split(''); 
                auxSubstraend = this.split('');
                isNegative = true;
                break;  
            } else{ //they area equal, the result is 0
                return('0');
            }
        }
    }

    //if auxMinuend is shorter in digit number than auxSubstraend, 
    //we fill the most significant numbers of auxSubstraend  with zeros
    if(auxMinuend.length > auxSubstraend.length){
        const diff = auxMinuend.length - auxSubstraend.length;
        for(let i = 0; i < diff; i ++){
            auxSubstraend.unshift('0'); 
        }
    }

    //trasnversing from back to front in both strings
    //for the total of partial operations we will perform
    for(let i = auxMinuend.length - 1; i >= 0; i--) {
        if(auxSubstraend[i] > auxMinuend[i]){
            rest.unshift(Number('1' + auxMinuend[i]) - Number(auxSubstraend[i]));
            auxMinuend[i - 1] = Number(auxMinuend[i - 1]) - 1;
            continue;
        } 
        rest.unshift(Number(auxMinuend[i]) - Number(auxSubstraend[i]));
    }

    rest = rest.join(''); //convert rest array to string
    if(isNegative) '-'.concat(rest); //adds negative symbol to rest result
    return restResult;
}

module.exports = String;