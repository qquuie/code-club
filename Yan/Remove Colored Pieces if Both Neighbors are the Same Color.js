/**
 * 1.找到三個都是相同的然後把中間的刪掉只留前後
 * 2.最後只要Alice>Bob的次數就回傳true
 * @param {string} colors
 * @return {boolean}
 */
const winnerOfGame = colors => {
    let Alice = 0;
    let Bob = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
            colors[i] === 'A' ? Alice++ : Bob++;
            let front = colors.slice(colors[i - 1], colors[i]);
            let end = colors.slice(colors[i + 1], colors.length);
            colors = front.concat(end);
        }
    }
    return Alice > Bob
};