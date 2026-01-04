const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');

const lineCount = Number(input);
let output = '';

for (let crrLine = 1; crrLine <= lineCount; crrLine++) {
    const star = Array.from({ length: crrLine }, () => '*').join('');
    output += `${star}\n`;
}

console.log(output);
