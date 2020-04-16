/*
https://www.codewars.com/kata/list-filtering
In this kata you will create a function that takes a list of non-negative integers and
strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(ar) {
    const filtered = ar.filter(function (el) {
        return typeof el !== 'string'
    });
    return filtered;
}

// arrow functions
const filter_list = ar => {
    return ar.filter((el) => typeof (el) !== 'string')
}

// one line
const filter_list = a => a.filter(el => typeof el !== 'string')