/**
 * @param {string} s
 * @return {boolean}
 */
s = "()"
var isValid = function(s) {
    const sign = ['(', ')', '{', '}', '[', ']'];
    let arry = s.split('');
    for (let i = 0; i < sign.length; i++) {
        for (let j = 0; j < arry.length; j++) {
            if (sign[i] === arry[j]) {

            }
        }
    }

    // console.log(arry[0])
};

isValid(s);