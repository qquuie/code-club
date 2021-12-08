/**
 * 往小的那邊前進
 * 面積 (right - left) * Math.min(height[right], height[left])
 * @param {number[]} height
 * @return {number}
 */
let maxArea = (height) => {
    let ans = 0;
    let length = height.length;
    let left = 0;
    let right = length - 1;
    if (length === 1) return height[0];

    while (left != right) {
        ans = Math.max(ans, (right - left) * Math.min(height[right], height[left]));
        (height[left] <= height[right]) ? left++ : right--;
    }
    return ans;
};