const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const repeat = Number(input[0]);

for(let index = 1; index <= repeat; index++) {
    const [a, b] = input[index].split(' ').map(Number);
    console.log(a + b);
}
