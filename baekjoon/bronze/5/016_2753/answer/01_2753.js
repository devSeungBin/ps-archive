const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const year = +input;

if (Object.is((year % 4), 0) && !Object.is((year % 100), 0) || Object.is((year % 400), 0)) console.log('1');
else console.log('0');
