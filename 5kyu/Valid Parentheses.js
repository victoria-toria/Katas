/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
Write a function called that takes a string of parentheses, and determines if the order 
of the parentheses is valid. The function should return true if the string is valid, and 
false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

const validParentheses = (p) => {
    const ar = p.split('');
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === '(' && ar[i + 1] === ')') {
            ar.splice(i, 2);
            i = - 1;
        }
    }
    return ar.length === 0
}


const validParentheses = (p) => {
    while (p.includes('()')) {
        //p = p.split('()').join('');
        p = p.replace('()', '')
    }
    return p.length === 0;
}

const validParentheses = (p) => {
    let queue = [];
    for (let el of p) {
        if (el === '(') {
            queue.push(el);
        }
        else if (queue.pop() !== '(') {
            return false;
        }
    }
    return queue.length === 0;
}

function validParentheses(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            count++;
        };
        if (string[i] === ")") {
            count--;
        };
        if (count < 0) {
            return false;
        };
    }
    return count == 0;
}