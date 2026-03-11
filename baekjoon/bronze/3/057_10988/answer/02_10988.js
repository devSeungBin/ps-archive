const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const strStack = input.split('');
let index = 0;
let palindrom = 1;

while (strStack.length !== 0) {
    if (input[index++] !== strStack.pop()) {
        palindrom = 0;
        break;
    }
}

console.log(palindrom);
