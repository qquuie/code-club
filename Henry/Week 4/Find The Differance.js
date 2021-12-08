/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  if (s === "") return t;
  let Stemp = s.toString().split("");
  let Ttemp = t.toString().split("");
  let sTotal = 0,
    tTotal = 0;
  for (let i = 0; i < t.length; i++) {
    tTotal += Ttemp[i].charCodeAt();
  }
  for (let i = 0; i < s.length; i++) {
    sTotal += Stemp[i].charCodeAt();
  }
  let Opt = String.fromCharCode(tTotal - sTotal);
  return Opt;
};
