const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numCount = Number(input[0]);
const numArr = [...input[1].split(' ').map(Number)];
const targetNum = Number(input[2]);

let targetCount = 0;

for (let index = 0; index < numCount; index++) {
    if (numArr[index] === targetNum) targetCount++;
}

console.log(targetCount);
