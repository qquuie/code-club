 
/**
 * @description 
 * @param {Array} nums -
 * @param {Number} target -
 * @return {number[]} -
 */
const twoSum = (nums,target)=>{
    let map = new Map;
    for(let i=0;i<nums.length;i++)
    {
        let ans=target-nums[i];
        if(map.has(ans)){
            return [map.get(ans),i];
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum([2,7,11,15],9))

