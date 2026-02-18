const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let count = 0;

for (const letter of input) {
    count++;
}

console.log(count);
