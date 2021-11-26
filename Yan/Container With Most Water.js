/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let answer = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] <= height[j]) {
                answer = Math.max(answer, height[i] * (j - i));
            } else {
                answer = Math.max(answer, height[j] * (j - i));
            }
        }
    }
    return answer
};