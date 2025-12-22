const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const year = Number(input);
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeap ? '1' : '0');
