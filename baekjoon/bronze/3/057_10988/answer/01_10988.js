const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let palindrom = 1;

for (let index = 0; index < input.length / 2; index++) {
    if (input[index] !== input[input.length - 1 - index]) {
        palindrom = 0;
        break;
    }
}

console.log(palindrom);
