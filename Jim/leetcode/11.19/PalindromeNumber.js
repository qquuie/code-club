/**
 * @description 變成array 長度若是偶數 則將length一半前放進stack 並依序pop 若不同就return false
 *                               奇數 則將length一半(無條件捨去)前放進stack 依序pop 並從一半+2位置對照 不同就return false
 * 
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
    if (x < 0) return false;
    else {
        let arr = x.toString().split('');
        for (let i = 0; i <= arr.length / 2 - 1; i++) {
            if (arr[i] != arr[arr.length - (i + 1)]) return false
        }
        return true
    }
};
