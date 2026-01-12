const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [numCount, targetNum] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);

let output = '';

for (let index = 0; index < numCount; index++) {
    if (numArr[index] < targetNum) output += `${numArr[index]} `;
}

console.log(output.trim());
