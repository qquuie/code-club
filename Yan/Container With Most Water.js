/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let answer = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i))
        height[i] <= height[j] ? i++ : j--
    }
    return answer
};