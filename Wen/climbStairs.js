/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let Ans=[]
    Ans[0]=0
    Ans[1]=1
    Ans[2]=2
    let i=3
    if(n<=2){
        console.log(Ans[n])
    }
    while(i<=n){
        Ans[i]=Ans[i-2]+Ans[i-1]
        i++
    }
    console.log(Ans[--i])
};
let n = 3
climbStairs(n)