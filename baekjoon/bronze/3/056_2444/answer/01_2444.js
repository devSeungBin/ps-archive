const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf8').trim());

const lineMaxCount = 2 * input - 1;

for (let lineNum = 1; lineNum <= lineMaxCount; lineNum++) {
    const line = [];
    const blanksCount = lineNum <= input ? input - lineNum : lineNum - input;
    const starsCount = lineMaxCount - 2 * blanksCount;

    if (blanksCount !== 0) {
        for (let index = 0; index < blanksCount; index++) {
            line.push(' ');
        }
    }

    for (let index = 0; index < starsCount; index++) {
        line.push('*');
    }

    console.log(line.join(''));
}
