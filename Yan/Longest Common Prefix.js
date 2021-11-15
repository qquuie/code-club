(function() {
    strs = ["flower", "flow", "flight"];
    /**
     * @param {string[]} strs input 
     * @return {string}
     */
    const longestCommonPrefix = function(strs) {
        let strFirst = [];
        let strSecond = [];
        let strEnd = [];
        let answer = [];
        strFirst = strs[0].split('');
        strSecond = strs[1].split('');
        strEnd = strs[strs.length - 1].split('');
        // strs of limit are 200
        for (let i = 0; i <= 200; i++) {
            // check length 
            if (strFirst.length > strSecond.length) {
                if (strSecond.length === i) {
                    break;
                }
            } else {
                if (strFirst.length === i) {
                    break;
                }
            }
            // compare first and sceond
            if (strFirst[i] === strSecond[i]) {
                // compare first/second and end
                if (strFirst[i] === strEnd[i]) {
                    answer.push(strFirst[i])
                }
            } else {
                console.log(`""\nThere is no common prefix a mon the input strings.`)
                break;
            }
        }
        // check answer.length>0 or []
        if (answer.length > 0) {
            console.log(answer);
        }
    };
    longestCommonPrefix(strs)
})()