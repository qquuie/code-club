//https://leetcode.com/problems/two-sum/

/**
 * 跑每個array的元素 算出還差多少會達到target 再看map裡有無這個元素 有:輸出 沒有:存進map
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    let myMap = new Map()
    let ans;
    nums.forEach((item, index) => {
        let goal = target - item;
        if (myMap.has(goal)) {
            ans = [myMap.get(goal), index]
        }
        myMap.set(item, index)
    })
    return ans;
}