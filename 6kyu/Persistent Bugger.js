/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
Write a function, persistence, that takes in a positive parameter num and returns its
multiplicative persistence, which is the number of times you must multiply the digits
in num until you reach a single digit.
For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
    let times = 0
    while (num.toString().length > 1) {
        num = num.toString().split("")
        //we convert the number into an array of digits
        num = num.reduce((acum, currentValue) => {
            return acum * currentValue
        })
        times++
    }
    return times
}


function persistence(num, count = 0) {
    const str = num.toString();
    //9="9"
    if (str.length > 1) {
        const sum = str.split("").reduce((acum, currentValue) => {
            return (acum * 1) * parseInt(currentValue)
        });
        counter++
        return persistence(sum, count + 1)
    }
    else {
        return count;
    }