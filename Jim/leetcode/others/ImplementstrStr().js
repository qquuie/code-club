// Input: haystack = "hello", needle = "ll"
//    ----------------------------
//      h e l l o
//    ----------------------------


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
    if (haystack === "" && needle != "") return -1;
    if (haystack === "" || needle === "") return 0;
    let count = 0;
    let ans = 0;
    haystack = haystack.split('');
    needle = needle.split('');
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[count]) {
            ans = i;
            count++;
        }
    }
    if (count === needle.length) {
        return (ans - count) + 1;
    } else {
        return -1
    }

};
console.log(strStr("", ""))