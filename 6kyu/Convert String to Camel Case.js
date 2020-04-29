/*
https://www.codewars.com/kata/517abf86da9663f1d2000003
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

const toCamelCase = str => {
    let camelCase = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_' || str[i] === '-') {
            camelCase += str[i + 1].toUpperCase();
            i++
        } else {
            camelCase += str[i]
        }
    }
    return camelCase
}

// Using regular expressions  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
const toCamelCase = str => str.replace(/[-_][a-zA-Z]/g, function (match) {
    return match[1].toUpperCase()
})
// Using arrow function you can have it in one line
const toCamelCase = str => str.replace(/[-_][a-zA-Z]/g, match => match[1].toUpperCase())
