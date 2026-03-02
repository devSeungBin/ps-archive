const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

let firstNum, secondNum;
for (const num of input) {
    const numArr = [...num];

    for (let index = 0; index < Math.floor(num.length / 2); index++) {
        const buffer = numArr[index];
        numArr[index] = numArr[num.length - 1 - index];
        numArr[num.length - 1 - index] = buffer;
    }

    if (firstNum === undefined) {
        firstNum = Number(numArr.join(''));
    } else {
        secondNum = Number(numArr.join(''));
    }
}

console.log(firstNum > secondNum ? firstNum : secondNum);
