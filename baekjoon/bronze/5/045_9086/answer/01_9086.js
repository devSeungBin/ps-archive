const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const words = input.slice(1);
const result = [];

for(const word of words) {
    result.push(`${word[0]}${word[word.length - 1]}`);
}

console.log(result.join('\n'));
