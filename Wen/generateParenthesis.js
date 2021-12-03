/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
     let a=1
     let b=1
     let Ans=0
     for(let i=2*n;i>n;i--){
         a*=i
         b*=(i-n)
     }
     Ans=a/b/(n+1)
     console.log(Ans)
};
let n=4
generateParenthesis(n)