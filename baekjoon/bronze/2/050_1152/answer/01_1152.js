const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).filter(Boolean);

console.log(input.length);
