const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let sum = 0;

for (const num of input[1]) {
    sum += Number(num);
}

console.log(sum);
