/*

1. 주어진 진법 B과 각 자릿수 N(n0n1n2...ni)을 이용해서 10진법으로 변환한다.

(거듭제곱 이용)
n0 * B^(N.length - 1 - 0) + n1 * B^(N.length - 1 - 1) + ... + ni * B^(N.length - 1 - i)

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const n = input[0];
const b = +input[1];

let output = 0;

for (let i = 0; i < n.length; i++) {
    let v = n.charCodeAt(i);
    v = v >= 65 ? v - 55 : v - 48;

    output += v * (b ** (n.length - 1 - i));
}

console.log(output);
