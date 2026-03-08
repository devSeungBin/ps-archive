const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const correctCount = [1, 1, 2, 2, 2, 8];
const differCount = [];

for (let index = 0; index < input.length; index ++) {
    differCount.push(correctCount[index] - input[index]);
}

console.log(differCount.join(' '));
