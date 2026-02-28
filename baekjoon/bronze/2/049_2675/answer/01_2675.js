const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const testCount = Number(input[0]);
let result = [];
for (let index = 1; index <= testCount; index++) {
    const [repeatCountStr, testCase] = input[index].split(' ');
    const repeatCount = Number(repeatCountStr);

    for (const ch of testCase) {
        result.push(ch.repeat(repeatCount));
    }

    result.push('\n');
}

console.log(result.join(''));
