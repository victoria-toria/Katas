/*
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript
The year of 2013 is the first year after the old 1987 with only distinct digits.
Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
Input/Output
[input] integer year
1000 ≤ year ≤ 9000
[output] an integer
the minimum year number that is strictly larger than the input number year and all its digits are distinct.
*/

// Solution with Set
function distinctDigitYear(year) {

    let ySt = new Set();
    let i = 1;
    while (ySt.size != 4) {
        ySt = new Set((year + i).toString());
        console.log(ySt);
        i++;
    }

    let result = ""
    for (let item of ySt) {
        result += `${item}`
    }

    return Number(result);
}

// Solution with indexOf()
function distinctDigitYear(year) {
    for (let i = year + 1; i < 9999; i++) {
        if (numberIsDistinct(i)) return i;
    }
}

function numberIsDistinct(num) {
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        if (num.indexOf(num[i], i + 1) !== -1) {
            return false
        }
    }
    return true;
}




// Some more solutions

function distinctDigitYear2(year) {
    let yearToCheck = year + 1
    while (true) {
        const numberArr = [...yearToCheck.toString()];
        const setted = new Set(numberArr)
        if (numberArr.length === setted.size) {
            //example with array length instead of size
            // const array = [...new Set(numberArr)]
            // if (numberArr.length === array.length) {
            return yearToCheck
        }
        yearToCheck++
    }
}

function distinctDigitYear3(year) {
    year += 1;
    let arr = year.toString().split('').map(Number);
    let count = [];
    arr.forEach(function (n) {
        let times = arr.filter(i => i == n);
        if (times.length > 1) {
            count.push(times);
        }
    });
    return count.length > 1 ? distinctDigitYear(year) : year;
}

function distinctDigitYear4(year) {
    for (let i = year + 1; i < Infinity; i++) {
        if (i.toString().split("").every((x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x))) {
            return i
        }
    }
}

