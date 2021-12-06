/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if(n<=1){return n}
    let nums=[]
    nums[0]=0
    nums[1]=1
    for(let i=2;i<=n;i++){
        if(i%2===0){nums[i] = nums[i/2]}
        else{nums[i]=nums[Math.floor(i/2)] + nums[Math.floor(i/2)+1]}
    }
    return Math.max(...nums)
};
let n=0
getMaximumGenerated(n)