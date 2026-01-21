const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input.map((val) => Number(val) % 42);

console.log([...new Set(numArr)].length);
