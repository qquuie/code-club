/**
 * 1,7 are happy number
 * if n>10 in the end n will within 1~9
 * @param {*} n
 * @return {*} 
 */
const isHappy = n => {
    if (n == 7) {
        return true
    }
    while (n > 6) {
        n = n.toString().split('');
        n.forEach((index, i) => {
            if (i === 0) {
                n = i
            }
            n += index * index;
        });
    }
    return n == 1
};
isHappy()