/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let a=s.split('').sort()
    let b=t.split('').sort()
    for(let i=0;i<b.length;i++){
        if(a[i] !== b[i]){return b[i];}
    }
};
let s = "ae", t = "aea"
findTheDifference(s,t)