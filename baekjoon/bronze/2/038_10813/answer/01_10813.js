const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [basketCount, swapCount] = input[0].split(' ').map(Number);
let basketArr = Array.from({ length: basketCount }, (val, idx) => idx + 1);

for (let index = 1; index <= swapCount; index++) {
    const [swapIdxA, swapIdxB] = input[index].split(' ').map((val) => Number(val) - 1);
    [basketArr[swapIdxA], basketArr[swapIdxB]] = [basketArr[swapIdxB], basketArr[swapIdxA]];
}

console.log(basketArr.join(' '));
