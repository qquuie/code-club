(function() {
    nums = [3, 2, 4];
    target = 6;
    /**
     * @param {number[]} nums input 
     * @param {number} target input
     * @return {number[]}
     */
    const twoSum = function(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                // check nums[i] + nums[j]===target
                if (nums[i] + nums[j] === target) {
                    console.log(`[${i}, ${j}]`);
                    break;
                }
            }
        }
    };
    twoSum(nums, target);
})()