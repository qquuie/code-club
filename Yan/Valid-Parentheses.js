/**
 * 1.use loop check '(','{','[' 
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            switch (s[i]) {
                case '(':
                    if (s[j] === ')') {
                        return true;
                    } else {
                        return false;
                    }
                case '{':
                    if (s[j] === '}') {
                        return true;
                    } else {
                        return false;
                    }
                case '[':
                    if (s[j] === ']') {
                        return true;
                    } else {
                        return false;
                    }
            }
        }
    }
};