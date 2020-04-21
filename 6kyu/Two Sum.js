/*
https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple like so: (index1, index2).
*/

// Two for loops
const twoSum = (numbers, target) => {
    let secondIndex;
    for (let i = 0; i < numbers.length; i++) {
        secondIndex = numbers.indexOf((target - numbers[i]), i + 1);
        if (secondIndex > - 1) return [i, secondIndex]
    }
}

// Same logic but using indexOf and subtraction
const twoSum = (numbers, target) => {
    let secondIndex;
    for (let i = 0; i < numbers.length; i++) {
        secondIndex = numbers.indexOf((target - numbers[i]), i + 1);
        if (secondIndex > - 1) return [i, secondIndex]
    }
}

// Solution with Object as Hash Table
const twoSum = (numbers, target) => {
    const numsIndices = {};
    numbers.forEach((el, index) => numsIndices[el] = index);
    for (let i = 0; i < numbers.length; i++) {
        const difference = target - numbers[i];
        if (numsIndices[difference] !== undefined) {
            return [i, numsIndices[difference]]
        }
    }
}