/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let count=0
    let All=n.toString()
    while(count<5){
        count++
        let Ans=0
        for(let i =0;i<All.length;i++){
            Ans+=Math.pow(parseInt(All.substr(i,1)),2)
        }
        if(Ans === 1){
            return true
            console.log("true")
        }
        All=Ans.toString()
    }
    return false
    console.log("false")
};
let n=7
isHappy(n)