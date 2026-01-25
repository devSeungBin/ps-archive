const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [basketCount, reverseCount] = input[0].split(' ').map(Number);
const basketArr = Array.from({ length: basketCount }, (val, idx) => idx + 1);

for (let index = 1; index <= reverseCount; index++) {
    const [start, end] = input[index].split(' ').map((val) => val - 1);
    const reversed = basketArr.slice(start, end + 1).reverse();

    basketArr.splice(start, end - start + 1, ...reversed);
}

console.log(basketArr.join(' '));
