const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numArr = input[1].split(' ').map(Number);
const minMax = numArr.reduce(([min, max], cur) => {
        return [
            cur < min ? cur : min,
            cur > max ? cur : max
        ]
    },
    [numArr[0], numArr[0]]
);

console.log(minMax[0], minMax[1]);
