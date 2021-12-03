/**
 * 參考資料 https://www.youtube.com/watch?v=sz1qaKt0KGQ 
 * 判斷條件 left+right==n,一開一關 不能關開
 * @param {*} n
 * @return {*} 
 */
const generateParenthesis = function(n) {
    const result = [];
    sol("", 0, 0)
    return result

    function sol(str, left, right) {
        if (left == n && right == n) {
            result.push(str);
            return result
        }
        if (left <= n) {
            sol(str + "(", left + 1, right);
        }
        if (left > right) {
            sol(str + ")", left, right + 1)
        }
    }
};