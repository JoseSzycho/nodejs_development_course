const minusStringPrototype = require('./minusStringPrototype'); 

String.prototype.div = function (strDivisor){
   
    let dividend = this.split('');      //converting string to array
    let divisor = strDivisor.split(''); //converting string to array
    let intResult;                      //for storing partial result 
    
    //Removing initials zeros if sent by user
    while(dividend[0] === '0' && dividend.length > 1){
        dividend.shift();
    }
    while(divisor[0] === '0' && divisor.length > 1){
        divisor.shift();
    }
    
    if(divisor['0'] == '0') throw new Error ('Cannot divide by zero');
    
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

    const divide = (dividend, divisor) => {
        let subDividend = [];   //stores most significant digits of dividend till is bigger than  divisor for making the partial operation
        let partialResult;      //stores calculations of each round
        let reminder = [];      //stores (subdividend - divisor) of eacho round
        let result = [];        //stores the final result

        const divLength = dividend.length;
        for(let i = 0; i <= divLength - 1; i++){    //there are are much operations as dividend lengtth
            subDividend.push(dividend.shift());     //storing first digit of dividend
            if(subDividend[0] == '0'){              //If digit is 0, we add 0 to partial result and skip to next round,
                subDividend = [];                   //is a special case when there is no remindir
                result.push(String(0));
                continue;                           //skip to next run
            }
    
            if(isNumberOneBiggerOrEqual(subDividend, divisor) !== 'smaller') { //when the subdividend is bigger than divisor, we can perform operation
                reminder = subDividend;
                partialResult = 0;
    
                while(isNumberOneBiggerOrEqual(reminder, divisor) !== 'smaller'){       //Finding the partial result, the amount of times we cant rest
                    reminder = (reminder.join('').minus(divisor.join(''))).split('');   //the divisor to the reminder is the partial result
                    partialResult++;
                };
         
                if(reminder[0] === '0') {       //If there is no reminder, it must be empty, 
                    subDividend = [];           //for pushing a digit from dividend in next round
                } else{
                    subDividend = reminder;     //if there is a reminder, we push to it next values from dividend in next round
                } 
                result.push(String(partialResult)); //storing partial result
          
            } else{
              if(result.length > 0)  result.push(String(0)); //If not operation could be performed, we add zero 
            }                                                //to result and take digit from dividend in next round
        }
    
        if(result[0] == undefined) result = ['0'] ; //if there was not posible operation, result is zero
        return([result.join(''), reminder]);
    }
    
    //getting int parte of result and reminder for calculatin
    //the decimal part
   
    [intResult, reminderFromIntResult] = divide(dividend, divisor);
    
    return intResult;
    
}

module.exports = String;