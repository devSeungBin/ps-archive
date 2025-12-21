const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const scoreBand = Math.floor(+input / 10);
const gradeTable = ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A', 'A'];

console.log(gradeTable[scoreBand]);
