const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf8').trim());

const lineMaxCount = 2 * input - 1;
const output = [];

for (let lineNum = 1; lineNum <= lineMaxCount; lineNum++) {
    const blanksCount = lineNum <= input ? input - lineNum : lineNum - input;
    const starsCount = lineMaxCount - 2 * blanksCount;

    output.push(' '.repeat(blanksCount) + '*'.repeat(starsCount));
}

console.log(output.join('\n'));
