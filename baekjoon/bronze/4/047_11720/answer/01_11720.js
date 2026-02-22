const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numCount = Number(input[0]);
const numArr = input[1].split('').map(Number);

let sum = 0;

for (let index = 0; index < numCount; index++) {
    sum += numArr[index];
}

console.log(sum);
