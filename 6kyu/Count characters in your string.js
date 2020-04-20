/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }
*/


// create empty result object, turn string to array, loop over the array, 
// check if letter is in the object, if yes increment it, if no add it to the 
// object with a value of 1


const count = (string) => {
    let obj = {};
    let array = string.split('');
    array.forEach(letter => {
        if (obj[letter]) {
            obj[letter]++;
        } else {
            obj[letter] = 1
        }
    });
    return obj;
}

// using reduce
const count = (s) => {
    const array = s.split('');
    const result = array.reduce((acc, val) => {
        if (val in acc) {
            return { ...acc, [val]: acc[val] + 1 }
        } else {
            return { ...acc, [val]: 1 }
        }
    }, {});
    return result;
}

// shorter reduce
const count = (s) => s.split('').reduce((obj, v) => {
    obj[v] = (obj[v] || 0) + 1;
    return obj
}, {});