const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [basketCount, reverseCount] = input[0].split(' ').map(Number);
const basketArr = Array.from({ length: basketCount }, (val, idx) => idx + 1);

for (let index = 1; index <= reverseCount; index++) {
    let [left, right] = input[index].split(' ').map((val) => val - 1);

    while (left < right) {
        [basketArr[left], basketArr[right]] = [basketArr[right], basketArr[left]];
        left++;
        right--;
    }
}

console.log(basketArr.join(' '));
