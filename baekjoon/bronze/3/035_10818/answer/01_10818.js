const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numCount = Number(input[0]);
const numArr = input[1].split(' ').map(Number);

let minNum = numArr[0];
let maxNum = numArr[0];

for (let index = 1; index < numCount; index++) {
    if (numArr[index] < minNum) {
        minNum = numArr[index];
        continue;
    }

    if (numArr[index] > maxNum) {
        maxNum = numArr[index];
        continue;
    }
}

console.log(`${minNum} ${maxNum}`);
