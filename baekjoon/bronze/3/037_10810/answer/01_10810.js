const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [count, times] = input[0].split(' ').map(Number);
let basket = Array(count);

for (let index = 0; index < count; index++) basket[index] = 0;

for (let index = 1; index <= times; index++) {
    const [start, end, num] = input[index].split(' ').map(Number);

    for (let target = start - 1; target <= end - 1; target++) basket[target] = num;
}

console.log(basket.join(' '));
