const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numCount = input.length;
const numArr = input.map(Number);

let maxNum = numArr[0];
let maxIdx = 0;

for (let index = 1; index < numCount; index++) {
    if (numArr[index] > maxNum) {
        maxNum = numArr[index];
        maxIdx = index;
    }
}

console.log(`${maxNum}\n${maxIdx + 1}`);
