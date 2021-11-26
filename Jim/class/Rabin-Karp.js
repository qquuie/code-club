function search(txt, pattern, prime, random) {
    let positions = [];
    let pHash, text;
    pHash = hashing(pattern, prime, random)
    for (let i = 0; i <= (txt.length - pattern.length); i++) {
        text = txt.slice(i, (i + pattern.length))

        if (equal(text, pattern)) {
            positions.push(i)
        }
    }
    printAns(positions);
}

function hashing(str, prime, random) {
    let hash = 0;
    let length = str.length
    for (let i = 0; i < length; i++) {
        //Unicode 
        hash = (hash * random + str.charCodeAt(i)) % prime
    }
    return hash
}


function equal(S1, S2) {
    let length = S1.length

    for (let i = 0; i < length; i++) {
        if (S1[i] !== S2[i]) {
            return false
        }
    }
    return true
}

function printAns(ans) {
    for (let i = 0; i < ans.length; i++) {
        console.log("Pattern found at index " + ans[i]);
    }
    console.log("Done")
}

search("Smartphone photo", "ph", 101, 256)