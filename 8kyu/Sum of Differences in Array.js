/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
Your task is to sum the differences between consecutive pairs in the array in descending order.
For example: sumOfDifferences([2, 1, 10]) Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/

// with a for loop
const sumOfDifferences = (arr) => {
    const sorted = arr.sort((a, b) => b - a);
    let counter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        counter += arr[i] - arr[i + 1];
    }
    return counter;
}

// subtracting the last from the first number in the sorted array
const sumOfDifferences = (arr) => {
    if (!arr.length > 0) return 0;
    const sorted = arr.sort((a, b) => b - a)
    return sorted[0] - sorted[sorted.length - 1]
}

// same solution but with Math.max() and Math.min() and in one line
const sumOfDifferences = (arr) => arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0