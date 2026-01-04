const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const caseCount = input.length;
let output = '';

for (let index = 0; index < caseCount; index++) {
    const [a, b] = input[index].split(' ').map(Number);
    output += `${a + b}\n`;
}

console.log(output);
