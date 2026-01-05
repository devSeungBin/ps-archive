const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input[1].split(' ').map(Number);
const targetNum = Number(input[2]);

console.log(numArr.filter((num) => num === targetNum).length);
