/**
 * @param {string} colors
 * @return {boolean}
 */
 var winnerOfGame = function(colors) {
    let All=colors.split('')
    let Anumbers=0,Aflag=0
    let Bnumbers=0,Bflag=0
    let s
    for(let i=0;i<All.length;i++){
        if(All[i] === 'A'){
            Anumbers++
            if(Bnumbers>=3){
                Bflag=i-2
            }
            Bnumbers=0
        }
        else if(All[i] === 'B'){
            Bnumbers++
            if(Anumbers>=3){
                Aflag=i-2
            }
            Anumbers=0
        }
    }
    // console.log("Anumbers:"+Anumbers+"Bnumbers:"+Bnumbers);
    if(Anumbers>=3){
        Aflag=All.length-2
    }
    if(Bnumbers>=3){
        Bflag=All.length-2
    }
    // console.log("Aflag:"+Aflag+"Bflag:"+Bflag);
    if(Aflag===0){
        console.log("Alice lose")
        //return false
    }
    else if(Bflag===0){
        console.log("Alice win");
        //return true
    }
    else{
        All[Aflag]=null
        All[Bflag]=null
        s=All.toLocaleString().replace(/\s*/g,"")
        winnerOfGame(s)
    }
};
let colors = "ABBBBBBBAAA"
winnerOfGame(colors)