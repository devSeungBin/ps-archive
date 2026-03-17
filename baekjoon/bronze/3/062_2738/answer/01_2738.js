/*

1. 주어진 행렬 A, B를 2차원 배열로 변환
2. 두 행렬의 각 행마다 원소들을 순회하며 값을 더한 값을 새로운 배열에 저장
3. 두 행렬을 더한 배열을 출력

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const a = Array.from({ length: n }, (_, i) =>
    input[i + 1].split(' ').map(Number)
);

const b = Array.from({ length: n }, (_, i) =>
    input[i + 1 + n].split(' ').map(Number)
);

const output = [];

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
        row.push(a[i][j] + b[i][j]);
    }
    output.push(row.join(' '));
}

console.log(output.join('\n'));
