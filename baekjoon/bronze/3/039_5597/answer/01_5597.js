const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const submitted = new Set(input);

const notSubmitted = [];
for (let index = 1; index <= 30; index++) {
    if (!submitted.has(index)) notSubmitted.push(index);
}

console.log(notSubmitted.join('\n'));
