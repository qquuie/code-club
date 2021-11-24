/**
 * @description 如果目前的數字前都是負數 那就不需要再比了 因為負數會越加越小
 *              因此把它歸零 好跟目前的數相加(將前面負數的和歸零) 最後在相比即可
 *              參考 https://www.youtube.com/watch?v=5WZl3MMT0Eg&ab_channel=NeetCode
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = (nums) => {
    let max = nums[0];
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (current < 0) {
            current = 0;
        }
        current += nums[i];
        max = Math.max(max, current);
    }
    return max;
}