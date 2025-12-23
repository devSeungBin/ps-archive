const input = require('fs').readFileSync(0, 'utf8').split(' ');
let [hours, minutes] = input.map(value => Number(value));

minutes -= 45;

if (minutes < 0) {
    hours = (hours + 23) % 24;
    minutes += 60;
}

console.log(`${hours} ${minutes}`);
