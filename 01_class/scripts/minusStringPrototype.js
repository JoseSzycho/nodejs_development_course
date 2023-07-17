String.prototype.minus = function(substraend){

    let rest = [];   //total of the substraction
    let originalSubstraend = substraend.split('');
    let originalMinuend = this.split('');

    while(originalMinuend[0] === '0' && originalMinuend.length > 1){
        originalMinuend.shift();
    }

    while(originalSubstraend[0] === '0' && originalSubstraend.length > 1){
        originalSubstraend.shift();
    }

    //if substraend > minuend, the result will be negative, so we change order
    //between the operators, the minuend will be the auxSubstraend, and the
    //substraend will be the auxMinuend, so we will always perform rest = auxMinuend - auxSubstraend,
    //and we will add the negative simbol becouse we know the number is negative.
    
    let isNegative = false; 
    let auxMinuend; 
    let auxSubstraend;
    
    //checking which number is bigger
    if(originalMinuend.length > originalSubstraend.length) { //minuend is bigger
        auxMinuend = originalMinuend;  
        auxSubstraend = originalSubstraend;   
    } 
    if(originalSubstraend.length > originalMinuend.length){ //substraend is bigger
        auxMinuend = originalSubstraend;  
        auxSubstraend = originalMinuend; 
        isNegative = true;
    } 

    //Numbers are same length, more observation is neccesary
    //we will check both numbers most significan digitis, the first number that
    //have a smaller digit is the smaller number
    if(originalSubstraend.length == originalMinuend.length) { 
        for(let i = 0; i < originalMinuend.length; i ++) {
            if(originalMinuend[i] > originalSubstraend[i]){    //minuend is bigger 
                auxMinuend = originalMinuend;         
                auxSubstraend = originalSubstraend; 
                break;
            } 
            if(originalSubstraend[i] > originalMinuend[i]){ //substraend is bigger
                auxMinuend = originalSubstraend; 
                auxSubstraend = originalMinuend;
                isNegative = true;
                break;
            } 

            //if the for ends, both numbers are equals and result is 0
            if(i == originalMinuend.length - 1){ 
                return '0';
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
        if(auxSubstraend[i] > auxMinuend[i]){ //in originalMinuend case, we need to borrow units to our left neighbour
            rest.unshift(Number('1' + auxMinuend[i]) - Number(auxSubstraend[i]));

            let j = 1;
            while(auxMinuend[i - j] === '0'){ //if the neighbour is a zero, we neet to take to the next neighbour
                auxMinuend[i - j] = '9';
                j++;
            };
            auxMinuend[i - j] = String(Number(auxMinuend[i - j]) - 1);

        } else{
            rest.unshift(Number(auxMinuend[i]) - Number(auxSubstraend[i]));
        }
        
    }

    //if the last most significant digits from lasts partials operations are the same, we must remove
    //the remainders zeros, also if the object was called with zeros in the most significant digits
    while(rest[0] === 0 && rest.length > 1){
        rest.shift();
    }

    rest = rest.join(''); //convert rest array to string

    if(isNegative) rest = '-'.concat(rest); //adds negative symbol to rest result
    return rest;
}

module.exports = String;