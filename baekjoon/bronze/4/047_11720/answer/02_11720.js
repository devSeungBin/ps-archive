const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const sum = input[1].split('').reduce((prevSum, num) => {
    return prevSum + Number(num);
}, 0)

console.log(sum);
