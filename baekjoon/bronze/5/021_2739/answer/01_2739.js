const input = require('fs').readFileSync(0, 'utf8');
const dan = Number(input);

for (let multiplier = 1; multiplier <= 9; multiplier++) {
    console.log(`${dan} * ${multiplier} = ${dan * multiplier}`);
}
