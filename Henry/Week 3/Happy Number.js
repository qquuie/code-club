/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let temp = n.toString().split('')
    let total = 0,totalNum
    for(let i = 0;i<temp.length;i++){
        total += Math.pow(i,2)
    }
    totalNum = total.toString().split('')
    for(let i = 0;i<totalNum.length;i++){
        if(totalNum[i] != 1)isHappy(totalNum)
        else if(totalNum[i] != 0)isHappy(totalNum)
    }
    return true
}

let n = 1
console.log(isHappy(n))