/*
https://www.codewars.com/kata/5412509bd436bd33920011bc
Usually when you buy something, you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
    let array = cc.split('');
    let hashed = array.splice(0, array.length - 4);
    let hashes = hashed.map((number, index) => '#').join('');
    return `${hashes}${array.join('')}`;
}

// using String.repeat() 
// -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat 
function maskify(cc) {
    if (cc.length < 5) return cc;
    return '#'.repeat(cc.length - 4) + cc.substring(cc.length - 4);
}

// using same logic as above but using ternary operator and arrow functions
const maskify = s => {
    return s.length < 5 ? s : '#'.repeat(s.length - 4) + s.substring(s.length - 4)
}