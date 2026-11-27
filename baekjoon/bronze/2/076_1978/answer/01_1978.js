/*

주어진 N개의 수들을 n1, n2, ..., ni라고 하자.

소수는 약수를 1과 자기 자신뿐만을 갖는 수를 의미한다.

주어진 수 ni의 약수를 찾기 위해 1부터 루트 ni까지 나누며
나머지가 0이 되는 수를 찾은 뒤, 그 수가 1이 아닐 경우
약수를 찾는 과정을 멈추고 다음 ni로 넘어간다.

정상적으로 약수를 찾는 과정이 종료되면 소수를 찾은 것이된다.

참고로 숫자 1은 소수가 아니다.

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const N = +input[0];
const n = [...input.slice(1).map(Number)];

let notPrime = 0;
for (let i = 0; i < N; i++) {
    if (n[i] === 1) {
        ++notPrime;
        continue;
    }

    for (let j = 1; j * j <= n[i]; j++) {
        if (n[i] % j === 0) {
            if (j !== 1) {
                ++notPrime;
                break;
            }
        }
    }
}

console.log(N - notPrime);