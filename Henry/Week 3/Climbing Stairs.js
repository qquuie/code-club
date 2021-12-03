//設定一個n值為目標距離
//每次可爬一步或兩步
//判斷有多少可能性能到達n值
//n=1  1
//n=2  2
//n=3  3
//n=4  5
//0個1 22
//1個1 no
//2個1 112_211_121
//3個1 no
//4個1 1111

//n=5  8
//0個1 no
//1個1 122_212_221
//2個1 no
//3個1 1112_1121_1211_2111
//4個1 no
//5個1 11111

//n=6  13
//0個1 222
//1個1 no
//2個1 1122_1212_2112_2121_2211_1221
//3個1 no
//4個1 11112_11121_11211_12111_21111
//5個1 no
//6個1 111111
//--------------------
//由此得知n的個數是(n-1)+(n-2)
//首先排除n1與n2 1與2
//從i=2開始 總和=n1+n2  n2=n1 n1=總和
//i=3 總和=上次總和+上次n1
//以此類推
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  let result = 0;
  let pre = 1;
  let next = 2;
  for (let i = 2; i < n; i++) {
    result = pre + next;
    pre = next;
    next = result;
  }
  return result;
};

let a = 6
console.log(climbStairs(a))