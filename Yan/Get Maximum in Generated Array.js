/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = n => {
    let nums = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            nums[i] = i;
        } else if (i % 2 == 1) {
            nums[i] = nums[(i - 1) / 2] + nums[(i + 1) / 2]
        } else if (i % 2 == 0) {
            nums[i] = nums[(i / 2)];
        }
    }
    return Math.max(...nums)
};