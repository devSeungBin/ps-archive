const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().toUpperCase();

const charCount = Array(26).fill(0);
for (const ch of input) {
    charCount[ch.charCodeAt(0) - 65]++;
}

let maxCount = 0;
let output = '?';
for (let index = 0; index < charCount.length; index++) {
    if (charCount[index] > maxCount) {
        maxCount = charCount[index];
        output = String.fromCharCode(index + 65);
    } else if (charCount[index] === maxCount) {
        output = '?';
    }
}

console.log(output);
