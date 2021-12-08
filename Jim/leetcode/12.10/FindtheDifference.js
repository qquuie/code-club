/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = (s, t) => {
    if (s === "") return t;
    let hashTable = new Map();
    let string = s.split('');
    let target = t.split('');
    target.forEach((item) => {
        if (hashTable.has(item)) {
            hashTable.set(item, hashTable.get(item) + 1);
        } else {
            hashTable.set(item, 1);
        }
    });
    string.forEach((item) => {
        if (hashTable.has(item)) {
            hashTable.set(item, hashTable.get(item) - 1);
        }
    });
    for (let [key, value] of hashTable) {
        if (value === 1) return key
    }
};
