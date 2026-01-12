const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const targetNum = Number(input[0].split(' ')[1]);
const numArr = input[1].split(' ').map(Number);

console.log(numArr.filter((num) => num < targetNum).join(' '));
