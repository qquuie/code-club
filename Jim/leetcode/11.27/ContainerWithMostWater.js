/**
 * 往小的那邊前進
 * 面積 (right - left) * Math.min(height[right], height[left])
 * 用current紀錄當次 再和an
 * @param {number[]} height
 * @return {number}
 */
let maxArea = (height) => {
    let ans = 0;
    let length = height.length;
    let left = 0;
    let right = length - 1;
    if (length <= 1) return height[0];

    for (let i = 0; i < length; i++) {
        let current = (right - left) * Math.min(height[right], height[left]);
        ans = Math.max(ans, current);
        (height[left] <= height[right]) ? left++ : right--;
    }
    return ans;
};