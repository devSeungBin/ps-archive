const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input.map(Number);
const max = numArr.reduce(([maxNum, maxIdx], cur, idx) => {
        if (cur > maxNum) return [cur, idx];
        else return [maxNum, maxIdx];
    },
    [numArr[0], 0]
);

console.log(`${max[0]}\n${max[1] + 1}`);
