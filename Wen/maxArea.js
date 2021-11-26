/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left=0
    let right=height.length-1
    let area=0
    let ans=0
    for(let i=0;i<height.length;i++){
        if(height[left]<height[right]){
            area=height[left]*(right-left)
            if(area>ans){ans=area}
            left++
        }
        else{
            area=height[right]*(right-left)
            if(area>ans){ans=area}
            right--
        }
    }
    //console.log(ans)
    return ans
};
let height = [1,8,6,2,5,4,8,3,7]
maxArea(height)