const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input[1].split(' ').map(Number);

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);
