/*
https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash
with 'letter' as key and count as 'value'.
Example:
letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/


function letterCount(s) {
    let arr = s.split('');
    let counts = {};

    arr.forEach((i) => (counts[i] = (counts[i]) ? ++counts[i] : 1));

    return counts;
}

function letterCount(string) {
    const arr = string.split("");
    let counter = {};
    for (let letter of arr) {
        if (letter in counter) {
            counter = { ...counter, [letter]: counter[letter] + 1 }
        } else counter = { ...counter, [letter]: 1 }
    }
    return counter
}

// using reduce
const letterCount = (s) => s.split('').reduce((a, v) => {
    a[v] = (a[v] || 0) + 1;
    return a
}, {});