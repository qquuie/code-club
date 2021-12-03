/**
 * use Fibonacci
 *
 * @param {*} n
 * @return {*} 
 */
const climbStairs = n => {
    if (n <= 1) {
        return 1
    } else {
        let pre = 1;
        let now = 1;
        for (let i = 2; i <= n; i++) {
            let temp = now;
            now = now + pre;
            pre = temp;
        }
        return now
    }
};