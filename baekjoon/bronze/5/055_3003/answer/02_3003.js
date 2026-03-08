const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const correctCount = [1, 1, 2, 2, 2, 8];

console.log(correctCount.map((val, idx) => val - input[idx]).join(' '));
