/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs)=>{
    let Ans=strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(Ans)){
            Ans=Ans.substring(0,Ans.length-1);
        }
    }
    return Ans;
}
strs=["flow","flower","flight"];
longestCommonPrefix(strs);



