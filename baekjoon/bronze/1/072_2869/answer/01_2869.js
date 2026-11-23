/*

달팽이는 낮에 A미터 이동하고, 밤에 B미터 떨어지니 하루에 총 A-B미터를 이동한다.

그렇게 최종적으로 V미터를 이동한다고 했을 때 총 몇일이 걸리는지 계산한다.

주의할 점은 A미터를 이동했을 때 목적지에 도달하거나 넘어가면 도착했다고 판단한다.

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const [A, B] = input.map(Number);
let V = +input[2];
let n = 0;

while (V > A) {
    V -= (A-B);
    n++;
}

console.log(++n);