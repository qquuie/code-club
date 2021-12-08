/**
 * 1.先轉成陣列再排序
 * 2.用迴圈跑兩個陣列有沒有不一樣的
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    s = s.split('').sort();
    t = t.split('').sort();
    for (let i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            return t[i]
        }
    }
};