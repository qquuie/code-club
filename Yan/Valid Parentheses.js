(function() {
    /**
     * 1.use loop check '(','{','[' and push ')','}',']'
     * 2 check s[i] === stack.pop()
     * @param {string} s
     * @return {boolean}
     */
    const isValid = s => {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case '(':
                    stack.push(')');
                    break;
                case '{':
                    stack.push('}');
                    break;
                case '[':
                    stack.push(']');
                    break;
                default:
                    if (s[i] !== stack.pop()) {
                        return false;
                    } else {
                        return true
                    }
            }
        }
    };
})()
