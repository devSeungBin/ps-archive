const input = require('fs').readFileSync(0, 'utf8').split(' ');
const diceList = input.map(Number);

const diceCount = {};
for (const pips of diceList) {
    diceCount[pips] = (diceCount[pips] || 0) + 1;
}

let prize = 0;
for (const [pips, count] of Object.entries(diceCount)) {
    if (count === 3) prize = 10000 + pips * 1000;
    else if (count === 2) prize = 1000 + pips * 100;
}

if (prize === 0) prize = Math.max(...diceList) * 100;

console.log(prize);
