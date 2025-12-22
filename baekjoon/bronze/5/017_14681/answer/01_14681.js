const input = require('fs').readFileSync(0, 'utf8').split('\n');
const [x, y] = input.map(value => Number(value));

if (x > 0 && y > 0) console.log('1');
else if (x < 0 && y > 0) console.log('2');
else if (x < 0 && y < 0) console.log('3');
else console.log('4');
