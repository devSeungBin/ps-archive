const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const [n, b] = input.map(v => +v);

console.log(n.toString(b).toUpperCase());
