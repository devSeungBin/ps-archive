const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const charArr = Array.from({ length: 26 }, () => -1);

for (let index = 0; index < input.length; index++) {
    const targetCharIdx = input.codePointAt(index) - 97;
    if (charArr[targetCharIdx] == -1) {
        charArr[targetCharIdx] = index;
    }
}

console.log(charArr.join(' '));
