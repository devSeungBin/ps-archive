const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');

const lineCount = Number(input);
let output = '';

for (let crrLine = 1; crrLine <= lineCount; crrLine++) {
    output += `${'*'.repeat(crrLine)}\n`;
}

console.log(output);
