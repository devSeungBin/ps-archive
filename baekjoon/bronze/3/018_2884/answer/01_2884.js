const input = require('fs').readFileSync(0, 'utf8').split(' ');
let [hours, minutes] = input.map(value => Number(value));

if (minutes < 45) {
    if (hours === 0)    hours = 23;
    else                hours -= 1;

    minutes += 60;
    minutes -= 45;
} else {
    minutes -= 45;
}

console.log(`${hours} ${minutes}`);
