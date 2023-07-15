//defining the plus String prototype
String.prototype.plus = function(addend){

    let numberOfOperations = 0; //number of operation it will be performed
    let sum = [];   //total of the sum
    let carry = 0;  //if partial sum > 9, carry set to 1, to add +1 to next partial operation
    let firstAddend; 
    let secondAddend; 

    //Makes the longets number to be in firstAddend
    if(this.length >= addend.length){
        firstAddend = this.split('');       //converting string to array  
        secondAddend = addend.split('');    //converting string to array
    }
    else{
        firstAddend = addend.split('');     //converting string to array 
        secondAddend = this.split('');      //converting string to array
    }
    
    numberOfOperations = firstAddend.length;

    //if secondAddend is shorter in digit number than firstAddend, 
    //we fill the most significant numbers of secondAddend  with zeros
    if(firstAddend.length > secondAddend.length){
        const diff = firstAddend.length - secondAddend.length;
        for(let i = 0; i < diff; i ++){
            secondAddend.unshift('0'); 
        }
    }
    
    //trasnversing from back to front in both strings
    //for the total of partial operations we will perform
    for(let i = numberOfOperations - 1; i >= 0; i--){
            let partialSum = Number(firstAddend[i]) + Number(secondAddend[i]) + carry;
            sum.unshift(partialSum % 10); //storing reminder in base 10 system. (it stores less significant digit)
            partialSum > 9 ? carry = 1 : carry = 0;
    }

    if(carry) sum.unshift(1); //if there is a carry reminder, we add it to most significant digit of sum

    return sum.join(''); //convert sum array to string
}

module.exports = String;
