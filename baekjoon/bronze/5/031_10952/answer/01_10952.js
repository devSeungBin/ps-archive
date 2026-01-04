const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let index = 0;
let output = '';

while (true) {
    const [a, b] = input[index++].split(' ').map(Number);
    if (a === 0 && b === 0) break;
    output += `${a + b}\n`;
}

console.log(output);
