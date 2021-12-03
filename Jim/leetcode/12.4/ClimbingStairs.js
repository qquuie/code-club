/**
 * 這題就是費氏數列
 * @param {number} n
 * @return {number}
 */

// Recursive
// let climbStairs = (n) => {
//     if (n === 1 || n === 2) return n;
//     else return climbStairs(n - 1) + climbStairs(n - 2)
// }

// Dynamic Programming
let climbStairs = (n) => {
    let ans = [];
    ans[1] = 1;
    ans[2] = 2;
    for (let i = 3; i <= n; i++) {
        ans.push(ans[i - 1] + ans[i - 2])
    }
    return ans[n]
}
