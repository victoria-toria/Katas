/*
https://www.codewars.com/kata/57eaec5608fed543d6000021
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.
Return as a number.
*/

function divCon(x) {
    let sumNum = 0;
    let sumString = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            sumNum += x[i];
        }
        if (typeof x[i] === 'string') {
            sumString += Number(x[i]);
        }
    }
    let result = sumNum - sumString;

    return result;
}

function divCon(x) {
    const nums = x.filter(num => typeof num === "number")
    const strings = x.filter(str => typeof str === "string")
    const sumstr = strings.reduce((acc, curval) => acc += parseInt(curval), 0)
    const sumnum = nums.reduce((acc, curval) => acc += curval, 0)
    return sumnum - sumstr
}

function divCon(x) {
    return x.reduce((acc, val) => typeof val === 'number' ? acc + val : acc - parseInt(val), 0)
}