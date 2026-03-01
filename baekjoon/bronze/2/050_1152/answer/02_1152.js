const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').match(/\S+/g);

console.log(input ? input.length : 0);
