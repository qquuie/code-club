/**
 * use stack and switch
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let Input=[]
    let Ans
    if (s.split("").length%2!==0) {
        console.log("false")
        //return false
    }
    Input.push(0)
    for(let i=0;i<s.split("").length;i++){
        switch(s.split("")[i]){
            case '(':
                Ans =1
                break;
            case '{':
                Ans =2
                break;
            case '[':
                Ans =3
                break;
            case ')':
                Ans =4
                break;
            case '}':
                Ans =5
                break;
            case ']':
                Ans =6
                break;
        }
        if(Ans === 1 || Ans === 2 || Ans === 3){
            Input.push(Ans)
        }
        else{
            if(Ans !== Input.pop()+3){
                console.log("false")
                //return false
            }
        }
    }
    if(Input.pop() === 0){
        console.log("true")
        //return true
    }else{
        console.log("false")
        //return false
    }
};
let s="()";
console.log(s)
isValid(s)

