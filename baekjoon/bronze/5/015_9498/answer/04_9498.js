const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const score = +input;

console.log(score >= 90 ? 'A' :
    score >= 80 ? 'B' :
    score >= 70 ? 'C' :
    score >= 60 ? 'D' :
    'F'
);
