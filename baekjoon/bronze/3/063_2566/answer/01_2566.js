/*

1. 각 행마다 원소들을 순회하며 최댓값과 해당 값한 행, 열 정보를 저장
2. 순회가 끝나면 최댓값끝 행, 열 정보를 출력

최댓값과 값이 같은 원소를 순회 시 무시하고 지나간다

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let max = -Infinity, r = 0, c = 0;

for (let i = 0; i < input.length; i++) {
    const line = input[i].split(' ').map(Number);

    for (let j = 0; j < line.length; j++) {
        if (line[j] > max) {
            max = line[j];
            r = i + 1;
            c = j + 1;
        }
    }
}

console.log(max + '\n' + r + ' ' + c);
