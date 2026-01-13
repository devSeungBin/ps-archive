const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input.map(Number);

const maxNum = Math.max(...numArr);
const maxIdx = numArr.indexOf(maxNum);

console.log(`${maxNum}\n${maxIdx + 1}`);
