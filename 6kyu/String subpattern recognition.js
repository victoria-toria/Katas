/*
https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b
In this kata you need to build a function to return either true/True or false/False if a string can be seen as 
the repetition of a simpler/shorter subpattern or not.
hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
*/

const hasSubpattern = string => {
    //your code here
    if (string.length == 1) return false
    for (let i = 0; i < string.length / 2; i++) {
        let aux = string.slice(0, i + 1).repeat(string.length / (i + 1))
        if (aux === string) return true
    }
    return false
}

const hasSubpattern = s => s.concat(s).indexOf(s, 1) !== s.length;