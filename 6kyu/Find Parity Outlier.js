/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single 
integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/


const findOutlier = a => {
    let odds = [];
    let evens = [];
    for (let num of a) {
        num % 2 === 0 ? evens.push(num) : odds.push(num);
    }
    return odds.length > 1 ? evens[0] : odds[0]
}

// we check the first three elements and then decide if we are looking for odd or even
const findOutlier = (integers) => {
    return integers.slice(0, 3).filter(even).length >= 2 ?
        integers.find(odd) : integers.find(even);
}
const even = num => num % 2 === 0
const odd = num => num % 2 !== 0

// really advanced solution
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
function findOutlier(integers) {
    function par(i) { return i & 1; }
    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
        if (parity == par(integers[2]))
            return integers[1];
        return integers[0];
    }
    return integers.find((i) => par(i) != parity);
}