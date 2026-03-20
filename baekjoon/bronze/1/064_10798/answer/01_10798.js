/*

1. 주어진 라인의 최대 길이를 열로, 주어지는 라인의 개수를 행으로 취급
2. 각 열마다 각 행을 순회하며 원소가 존재하는 경우 값을 추가

가로로 순회하는 것이 아닌 세로로 순회하므로 i, j가 반대가 됨에 주의

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const max = Math.max(...input.map(v => v.length));
let output = '';

for (let j = 0; j < max; j++) {
    for (let i = 0; i < input.length; i++) {
        if (input[i][j]) {
            output += input[i][j];
        }
    }
}

console.log(output);
