/**
 * 1. use reverse to check true or false
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {
    x = -121;
    x = x.toString();
    let answer = x.split('').reverse().join('');
    if (answer === x) {
        return true
    } else {
        return false
    }
};