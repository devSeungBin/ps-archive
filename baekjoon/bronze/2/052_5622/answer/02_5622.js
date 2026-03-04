const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const dialTimeArr = [
    3, 3, 3,
    4, 4, 4,
    5, 5, 5,
    6, 6, 6,
    7, 7, 7,
    8, 8, 8, 8,
    9, 9, 9,
    10, 10, 10, 10
];
const dialMinTime = [...input].reduce((totalTime, time) => {
    return totalTime + dialTimeArr[time.codePointAt(0) - 65];
}, 0);

console.log(dialMinTime);
