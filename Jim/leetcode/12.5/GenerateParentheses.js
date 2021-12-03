//想不出來 看完才會的 https://www.youtube.com/watch?v=sz1qaKt0KGQ&ab_channel=BackToBackSWE

/**
 * main function
 * @param {*} n 
 * @returns 
 */
function generateParenthesis(n) {
    const ans = [];
    return traceBack('', n, n, ans);
};


/**
 * using trace back Algo
 * 1. right can not bigger than left,this is impossible
 * 2. if right and left is 0 push to array, this mean we use up all parentheses
 * 3. right needs to run before left because can not close before open
 * @param {*} n 
 * @returns {[]}
 */
function traceBack(str, right, left, ans) {
    if (right > left) return;

    if (right === 0 && left === 0) {
        ans.push(str)
        return;
    }

    if (right > 0) traceBack(`${str}(`, right - 1, left, ans);
    if (left > 0) traceBack(`${str})`, right, left - 1, ans);

    return ans;
}


/**
 * 算爽的
 * 算總共幾次n筆資料會有幾種可能
 * @param {*} n 
 * @returns 可能次數
 */
function calculateTotal(n) {
    let totalTime = 1;
    for (let i = 0; i < n; i++) {
        totalTime *= (2 * n - i) / (i + 1);
    }
    totalTime = totalTime / (n + 1);

    return totalTime;
}