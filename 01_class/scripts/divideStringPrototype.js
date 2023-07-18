const minusStringPrototype = require('../scripts/minusStringPrototype'); 
const plusStringPrototype = require('../scripts/plusStringPrototype');
const multiplyStringPrototype = require('../scripts/multiplyStringPrototype');

String.prototype.divide = function(divisor) {
    let DECIMALPRECISION = 1000;
    let newDivisor = divisor.split('');
    let newDividend = this.split('');
    let reminder = this.split(''); 
    let result = ['0'];
    let intResult = ['0'];
    let decimaResult = ['0'];
    let shift = 0;

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


     if(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller') {

        while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){
            reminder = (reminder.join('').minus(divisor)).split('');
            intResult = (intResult.join('').plus('1')).split('');
         }

         if(reminder == '0') return intResult.join('');
     }
     
     //borar lo de abajo si no funciona
     while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'bigger'){
        shift++;
        reminder.push('0');
     } 

     //ajustar precision
     for(let i = 0; i<shift - 1; i++) DECIMALPRECISION /= 10;



     reminder = (reminder.join('')).multiply(String(DECIMALPRECISION)).split('');
     
 
     while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){
        reminder = (reminder.join('').minus(divisor)).split('');
        decimaResult = (decimaResult.join('').plus('1')).split('');
     }
    
     //borrar si no funchiona
     for(let i = 0; i < shift - 1; i++) {
        decimaResult.unshift('0');
     }
 
     result = (intResult.concat('.').concat(decimaResult));

     /*
     for(let i = result.length - 1; i >= 0; i--){
        console.log(result[i])
        if(result[i] === '0') {
            result.pop();
        }
     }
     */

     return result.join('');
}



   /*
for(let i = 0; i < DECIMALPRECISION; i++){

    if(isNumberOneBiggerOrEqual(reminder, divisor) === 'smaller') {
        decimaResult.push('0');
        reminder.push('0');
    } else {
        result = ['0'];
        while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){
            reminder = (reminder.join('').minus(divisor)).split('');
            result = (result.join('').plus('1')).split('');
         }
         decimaResult.push(result);
    }
    if(reminder == '0') break;
 }

 result = intResult.concat(decimaResult).join('');
 
 return(result);

 */