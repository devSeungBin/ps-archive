const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const firstNum = Number([...input[0]].reverse().join(''));
const secondNum = Number([...input[1]].reverse().join(''));

console.log(Math.max(firstNum, secondNum));
