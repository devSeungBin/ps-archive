const input = require('fs').readFileSync(0, 'utf8').split(' ');
const diceList = input.map(Number).sort((a, b) => a - b);
let prize;

if (diceList[0] === diceList[2]) prize = 10000 + diceList[0] * 1000;
else if (diceList[0] === diceList[1] || diceList[1] === diceList[2]) prize = 1000 + diceList[1] * 100;
else prize = diceList[2] * 100;

console.log(prize);
