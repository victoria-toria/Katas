/*
https://www.codewars.com/kata/57fe50d000d05166720000b1
You need to approach your boss. Her decision will be based on three parameters:
val= your value to the organisation
happ= her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string 'x'.
Note that if x contains three instances of the letter 'l', that still scores three points, 
even though there is only one in the word sabbatical.
If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', 
else return 'Back to your desk, boy.'.
*/

const sabb = (str, val, happ) => {
    let res = 0;
    for (let char of str) {
        if ('sabbatical'.includes(char)) res++
    }
    return res + val + happ > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'

}

// using reduce
function sabb(s, val, happiness) {
    let sabbatical = "sabbatical"
    let arr = s.split("")
    const num = arr.reduce((acc, curval) => sabbatical.includes(curval) ? acc + 1 : acc, 0)
    return num + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}