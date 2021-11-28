/**
 * 關鍵並不是找到happy number而是怎麼終止她找happy number
 * 所以可以建個set把計算當局的結果存進去
 * 並檢查set中有無重複 重複則代表已經進到無窮迴圈了 可以跳出
 * 最後再判斷ans是否等於1即可
 * @param {number} n
 * @return {boolean}
 */
let isHappy = (n) => {
    let ans = n
    let set = new Set();
    //檢查set中有無重複
    // this is O(1) js using hash to build the set 
    // faster than array(O(n))
    while (!set.has(ans)) {
        set.add(ans)
        ans = disassembleNumber(ans)
    }
    return ans === 1;
};

function disassembleNumber(number) {
    let newNum = 0, temp;
    while (number > 0) {//計算當局數值
        temp = number % 10;
        newNum += temp * temp;
        number = Math.floor(number / 10);//取整數
    }
    return newNum
}

//So Time complexity is O(n*n) 但我們知道最大組合是 (1到9)平方*(0到9)平方 最糟有90種可能
//所以可以看成O(90n)故 => O(n)