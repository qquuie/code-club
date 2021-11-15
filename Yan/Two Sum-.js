(function() {
    /**
     * @param {number[]} nums 
     * @param {number} target 
     * @return {number[]}
     */
    const twoSum = (nums, target) => {
        let answer = null;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                // check nums[i] + nums[j]===target
                if (nums[i] + nums[j] === target) {
                    answer = [i, j];
                }
            }
        }
        return answer
    };
})()