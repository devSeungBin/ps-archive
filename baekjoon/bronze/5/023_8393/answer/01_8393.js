const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');

let n = Number(input);
let sum = 0;

do {
    sum +=  n;
} while (--n)   // n이 1보다 크므로 가능. 0이 들어오면 무한루프.

console.log(sum);
