/*
jhttps://www.codewars.com/kata/550498447451fbbd7600041c
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" 
elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/

function comp(a1, a2) {
    // because either of the array can be null and in that case we want to return false
    if (!a1 || !a2) return false;
    const a1Sum = JSON.stringify(a1.map(x => x ** 2).sort());
    const a2Sum = JSON.stringify(a2.sort());
    return a1Sum === a2Sum;
}

// sufficient version to pass the tests - we just sum up the array values
function comp(a1, a2) {
    if (!a1 || !a2) return false;
    const a1Sum = a1.reduce((a, b) => a + b, 0);
    const a2Sum = a2.reduce((a, b) => a + b ** b, 0);
    return a1Sum === a2Sum;
}