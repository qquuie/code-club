// 先將字串分割成陣列後，判斷兩個陣列是否有一樣的元素，
// 若有相同的將其刪除，並回傳最後剩下的元素
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let base=s.split("");
    let more=t.split("");
    if(more.length>1){
        for(let i=0;i<base.length;i++){
            for(let j=0;j<more.length;j++){
                if(base[i]===more[j]){  //將一樣的元素刪除
                    more.splice(j,1);
                    break;  //防止有重複的元素被刪除
                }
            }
        }
    }
    return more[0];
};