/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/


// this is how you can get number of occurences for a certain character
const character = 'w';
console.log('hello world'.split(character).length - 1);


function freqSeq(s, sep) {
    const arr = s.split("")
    const obj = arr.reduce((acc, curval) =>
        curval in acc ? { ...acc, [curval]: acc[curval] + 1 } : { ...acc, [curval]: 1 }, {})
    return arr.map(letter => obj[letter]).join(sep)
}


const freqSeq = (str, sep) => [...str].map(char => str.split(char).length - 1).join(sep)