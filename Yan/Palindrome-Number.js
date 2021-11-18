/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {
    x = -121;
    x = x.toString();
    x = x.split('');
    let answer = x.reverse();
    if (answer === x && answer[answer.length - 1] !== '-') {
        console.log('true')
    } else {
        console.log('false')
    }
};
isPalindrome();