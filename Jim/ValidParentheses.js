//https://leetcode.com/problems/valid-parentheses/

class Stack {
    //init the Stack
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(item) {
        this.data[this.top] = item;
        this.top += 1;
    }
    pop() {
        this.top -= 1;
        return this.data.pop()
    }
    show() {
        console.log(this.data)
    }
    isEmpty() {
        return this.top === 0;
    }
}
/**
 * map設置正確的配對 把s分成array 再跑每個元素 遇到左括號push進Stack 右括號則pop並把它存為peek
 * 進到map比對目前這個右括號和peek到map找的結果是否一樣
 * 
 * @param {String} s 
 * @returns {Boolean}
 */
let isValid = (s) => {
    let stack = new Stack();
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    let str = s.split('');
    for (let i = 0; i < str.length; i++) {
        let s = str[i];
        if (s === '(' || s === '[' || s === '{') {
            stack.push(s);
        }
        else {
            let peek = stack.pop();
            if (s !== map.get(peek)) {
                return false;
            }
        }
    }
    return stack.isEmpty();
};