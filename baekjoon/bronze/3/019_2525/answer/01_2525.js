const input = require('fs').readFileSync(0, 'utf8').split('\n');
let [hours, minutes] = input[0].split(' ').map(value => Number(value));
const timer = Number(input[1]);

minutes += timer;

hours = (hours + Math.floor(minutes / 60)) % 24;
minutes = minutes % 60;

console.log(`${hours} ${minutes}`);
