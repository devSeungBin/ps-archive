/*

1. 주어진 진법 B과 각 자릿수 N(n0n1n2...ni)을 이용해서 10진법으로 변환한다.

(누적 곱셈 이용, result는 0부터 시작)
result = result * B + ni

123
0 = 0 * 10 + 1      >> 1
1 = 1 * 10 + 2      >> 12
12 = 12 * 10 + 3    >> 123

누적 곱셈은 왼쪽부터 한 자리씩 늘려가며 각 자릿수에 들어갈 수를 더하는 방법

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const n = input[0];
const b = +input[1];

let output = 0;

for (const ch of n) {
    const v = ch >= 'A'
        ? ch.charCodeAt(0) - 55
        : ch.charCodeAt(0) - 48;

    output = output * b + v;
}

console.log(output);
