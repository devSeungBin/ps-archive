const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input.map((val) => Number(val) % 42);
const remainderArr = Array.from({ length: 42 }, () => 0);
let remainderCount = 0;

for (let index = 0; index < numArr.length; index++) {
    const remainder = numArr[index];
    if (remainderArr[remainder] == 0) {
        remainderArr[remainder] = 1;
        remainderCount++;
    }
}

console.log(remainderCount);
