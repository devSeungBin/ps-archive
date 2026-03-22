/*

0. 가로행이 100, 세로열이 100인 2차원 배열을 0으로 초기화
1. 주어지는 색종이의 크기만큼 배열의 해당 영역에 포함되는 원소를 1로 변경 후, 색종이가 붙은 영역 크기를 +1

만약 변경하려는 위치가 이미 1인 경우 변경과 크기를 더하지 않고 건너뜀

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = +input[0];

const board = Array.from({ length: 100 }, () =>
    Array(100).fill(0)
);
let area = 0;

for (let k = 1; k <= n; k++) {
    const [x, y] = input[k].split(' ').map(Number);

    for (let i = y; i < y + 10; i++) {
        for (let j = x; j < x + 10; j++) {
            if (!board[i][j]) {
                board[i][j] = 1;
                area++;
            }
        }
    }
}

console.log(area);
