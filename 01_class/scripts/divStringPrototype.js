const minusStringPrototype = require('../scripts/minusStringPrototype'); 
const plusStringPrototype = require('../scripts/plusStringPrototype');
const multiplyStringPrototype = require('../scripts/multiplyStringPrototype');


String.prototype.div = function (strDivisor){
    let dividend = this.split('');
    let divisor = strDivisor.split('');
    let subDividend = [];
    let partialResult;
    let reminder = [];
    let intResult = [];
        
    const isNumberOneBiggerOrEqual = (number1, number2) => {

        if(number1.length > number2.length) return 'bigger';
        if(number2.length > number1.length) return 'smaller';
        
       
        //if we are here, they are both same lenght, 
        //further analisys is necessary
        for(let i = 0; i < number1.length; i ++) {
            if(number1[i] > number2[i]){    //number 1 is bigger 
                return 'bigger'; 
            } 

            if(number2[i] > number1[i]){    //number 1 is smaller
                
                return 'smaller'; 
            } 
            
            //if the for ends, both numbers are equals and result is 0
            if(i == number1.length - 1){ 
                return 'equal';
            }
        }

    }

    const divLength = dividend.length;
    for(let i = 0; i <= divLength - 1; i++){
        subDividend.push(dividend.shift());
        
        if(subDividend[0] == '0'){
            subDividend = [];
            intResult.push(String(0));
            continue;
        }

        if(isNumberOneBiggerOrEqual(subDividend, divisor) !== 'smaller') {
            reminder = subDividend;
            partialResult = 0;

            while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){
                reminder = (reminder.join('').minus(divisor.join(''))).split('');
                partialResult++;
            };
     
            if(reminder[0] === '0') {
                subDividend = [];
            } else{
                subDividend = reminder;
            } 
            intResult.push(String(partialResult));
      
        } else{
          if(intResult.length > 0)  intResult.push(String(0));
        }        
    }

    if(intResult[0] == undefined) intResult = ['0'] ;

    return(intResult.join(''));


    while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'bigger'){
        shift++;
        reminder.push('0');
    } 

    //ajustar precision
    for(let i = 0; i<shift - 1; i++) DECIMALPRECISION /= 10;

    decimalDividend = (reminder.join('')).multiply(String(DECIMALPRECISION)).split('');


    //calculates the decimal part of the result
    subDividend = [];
    divLength = decimalDividend.length;
    for(let i = 0; i <= divLength - 1; i++){
  
        subDividend.push(decimalDividend.shift());
        if(isNumberOneBiggerOrEqual(subDividend, divisor) !== 'smaller') {
            reminder = subDividend;
            partialResult = 0;
  
            while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){
                reminder = (reminder.join('').minus(divisor.join(''))).split('');
                partialResult++;
            };
       
            if(reminder[0] === '0') {
                subDividend = []
            } else{
                subDividend = reminder;
            }
                decimalResult.push(String(partialResult));
        
        } else{
            if(intResult.length > 0)  decimalResult.push(String(0));
        }        
    }

    //borrar si no funchiona
    for(let i = 0; i < shift - 1; i++) {
        decimalResult.unshift('0');
    }

    return((intResult.concat('.').concat(decimalResult)).join(''));
     
    
}

module.exports = String;