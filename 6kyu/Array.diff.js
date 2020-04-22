/*
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.
It should remove all values from list a, which are present in list b.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// using two for loops
function arrayDiff(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr1.splice(i, 1)
            i--
        }
    }
    return arr1
}

// using filter and a check if b does not include the element from a
const array_diff = (a, b) => {
    const filtered = a.filter(el => {
        // return b.indexOf(el) == -1
        return !b.includes(el)
    });
    return filtered;
}

// in one line using the implicit returns
const array_diff = (a, b) => a.filter(el => !b.includes(el));