const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let loop = Number(input[0]);
let output = '';

for (let index = 1; index <= loop; index++) {
    const [a, b] = input[index].split(' ').map(Number);
    output += `${a + b}\n`;
}

console.log(output);
