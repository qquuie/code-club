class Stack {
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