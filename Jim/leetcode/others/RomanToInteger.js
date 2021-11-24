/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s) => {
    let ans = 0;
    s = s.split('');
    let map = new Map([
        ['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000],
    ]);
    for (let i = 0; i <= s.length - 1; i++) {
        if (map.get(`${s[i]}${s[i + 1]}`)) {
            ans += map.get(`${s[i]}${s[i + 1]}`)
            i++;
        }
        else {
            ans += map.get(`${s[i]}`);
        }
    }
    return ans;

};