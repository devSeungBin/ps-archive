/*

1. 주어진 10진법 수 N을 이용해서 B진법으로 변환한다.

101001 (41)
41 -> 20...1 10...0 5...0 2...1 1...0 0...1

1101 (13)
13 -> 6...1 3...0 1...1 0...1

1 (1)
1 -> 0...1

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

let [n, b] = input.map(v => +v);
const board = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const output = [];

while (n > 0) {
    output.push(board[n % b]);
    n = Math.floor(n / b);
}

console.log(output.length > 0 ? output.reverse().join('') : '0');
