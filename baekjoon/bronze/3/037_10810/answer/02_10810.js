const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [count, times] = input[0].split(' ').map(Number);
let basket = Array(count).fill(0);

for (let index = 1; index <= times; index++) {
    const [start, end, n] = input[index].split(' ').map(Number);
    basket.fill(n, start - 1, end);
}

console.log(basket.join(' '));
