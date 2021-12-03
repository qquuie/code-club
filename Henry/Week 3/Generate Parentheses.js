/**
 * @param {number} n
 * @return {string[]}
 */
//backtrack 回朔法
//以n = 2舉例
//No1(0,0)遇到Open<n push ( 進入No2
//No2(1,0) 此時temp為["("] 遇到Open<n push ( 進入No3
//No3(2,0) 此時temp為["(","("]  遇到Open>Close push ) 進入No4
//No4(2,1) 此時temp為["(","(",")"] 遇到Open>Close push ) 進入No5
//No5(2,2) 此時temp為["(","(",")",")"]遇到return 往回至No4  此時ans = ["(())"]
//No4(2,1) 從Open>Close繼續 Pop 1次 此時Temp為["(","(",")"] No4結束 回No3
//No3(2,0) 從Open>Close繼續 Pop 1次 此時Temp為["(","("] No3結束 回No2
//No2(1,0) 從Open<n繼續 Pop 1次 此時Temp為["("] 遇到Open>Close push ) 進入No3-1
//No3-1(1,1) 此時Temp為["(",")"] 遇到Open<n push ( 進入No4-1
//No4-1(2,1) 此時Temp為["(",")","("] 遇到Open>Close push ) 進入No5-1
//No5-1(2,2) 此時Temp為["(",")","(",")"] 遇到return 往回至No4-1 此時ans = ["(())","()()"]
//No4-1(2,1) 從Open>Close繼續 pop 1次 此時Temp為["(",")","("] No4-1結束 回No3-1
//No3-1(1,1) 從Open<n繼續 pop 1次 此時Temp為["(",")"] Open>Close不成立 No3-1結束 回No2
//No2(1,0) 從Open>Close 繼續 pop 1次 此時Temp為["("]  回No1
//No1(0,0) 從Open<n 繼續 pop 1次 此時Temp為[] Open>Close不成立 No1結束
//return ans=["(())","()()"]

var generateParenthesis = function (n) {
  const ans = [];

  const backtrack = function (Open = 0, Close = 0, temp = []) {
    if (temp.length === 2 * n) {
      ans.push(temp.join(""));
      return;
    }
    if (Open < n) {
      temp.push("(");
      backtrack(Open + 1, Close, temp);
      temp.pop();
    }
    if (Open > Close) {
      temp.push(")");
      backtrack(Open, Close + 1, temp);
      temp.pop();
    }
  };

  backtrack();
  return ans;
};
let n = 2
console.log(generateParenthesis(n))