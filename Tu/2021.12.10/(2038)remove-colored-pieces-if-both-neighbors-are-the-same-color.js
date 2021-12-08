//Alice只能移除"A"，且條件必須是相鄰"A"的左右鄰居也都是"A"
//Bob只能移除"B"，且條件必須是相鄰"B"的左右鄰居也都是"B"
//不可以移動左右兩側邊緣線上的元素(第一個&最後一個)
//當其中一方無法移動時，另一方獲勝
//判斷字串中的A和B各可以移動幾次
//當A可以動的次數大於B的話，Alice必定會獲勝；反之則是Bob獲勝。
/**
 * @param {string} colors
 * @return {boolean}
 */
 var winnerOfGame = function(colors) {
    let countA=0;
    let countB=0;
    if(colors.length<3){return false;}
    for(let i=1; i<colors.length-1; i++){
        if(colors[i]==="A" && colors[i-1]==="A" && colors[i+1]==="A"){
            countA++;
        }
        if(colors[i]==="B" && colors[i-1]==="B" && colors[i+1]==="B"){
            countB++;
        }
    }
    if(countA>countB){return true;}
    else{return false;}
    //Alice為先移動者，當countA==countB時，下一輪順序的Alice已無法移動->lose
};