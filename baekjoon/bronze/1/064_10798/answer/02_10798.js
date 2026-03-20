/*

0. 주어진 라인들로 배열 생성
1. 배열에 라인의 길이가 0이 아닌 라인이 존재하지 않을 때까지 2를 반복
2. 라인의 첫 번째 원소를 제거한 뒤 출력

라인의 길이가 0이면 해당 원소를 건너뛰기

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const lines = input.map(v => v.split('').reverse());

let remaining = lines.length;
let i = 0;

while (remaining > 0) {
    if (lines[i].length > 0) {
        process.stdout.write(lines[i].pop());

        if (lines[i].length === 0) {
            remaining--;
        }
    }

    i = (i + 1) % lines.length;
}
