/**
 * @param {number} n
 * @return {number}
 */
let getMaximumGenerated = (n) => {
    if (n === 0) return 0;

    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) arr[i] = arr[Math.floor(i / 2)];
        else if (i % 2 === 1) arr[i] = arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1]
    }
    return Math.max(...arr);
};
