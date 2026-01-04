const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const caseCount = Number(input[0]);
let output = '';

for(let index = 1; index <= caseCount; index++) {
    const [a, b] = input[index].split(' ').map(Number);
    const c = a + b;
    output += `Case #${index}: ${a} + ${b} = ${c}\n`;
}

console.log(output);
