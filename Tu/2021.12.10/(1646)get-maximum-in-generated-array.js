/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    let num=[];
    num[0]=0;
    num[1]=1;
    let result=0;
    if(n<=1){
        return n;
    }
    if(n>1){
        for(let i=2;i<n+1;i++){
            if(i%2==0){     //偶數
                num[i]=num[i/2];
            }
            if(i%2!==0){    //奇數
                num[i]=num[(i-1)/2]+num[((i-1)/2)+1];
            }
            if(num[i]>result){   //取最大值
                result=num[i];
            }
        }
    }
    return result;
};