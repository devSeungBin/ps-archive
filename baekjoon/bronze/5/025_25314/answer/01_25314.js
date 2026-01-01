const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');

const byteSize = Number(input);
let loop = byteSize / 4;
let dataType = '';

do {
    dataType += 'long ';
} while (--loop)

console.log(`${dataType}int`);
