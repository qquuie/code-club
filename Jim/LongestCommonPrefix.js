//https://leetcode.com/problems/longest-common-prefix/

/**
 * 第一個值當刪減值 我和陣列中的後一個元素比若是不一樣則刪除最後一個字 直到一樣為止 接著在往下一個陣列的元素比對  
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
    let ans = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans)) {
            ans = ans.substring(0, ans.length - 1);
        }
    }
    return ans
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))