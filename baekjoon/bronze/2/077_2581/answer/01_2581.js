/*

(M과 N은 10,000이하의 자연수,  M은 N보다 작거나 같음)

소수를 담을 빈 배열 A를 만든다.

그 후 M부터 N까지 그 사이에 있는 자연수 n에 대해서 (M, N 포함임)
1부터 루트 n까지 나누며 1이 아닌 약수를 가지는 숫자를 제외한 소수만을 A에 담는다.

A의 길이가 0이면 -1을, 1이상이면
배열 내의 소수의 합과 배열 내 첫 번째 소수(가장 작은 소수)를 차례로 출력한다.

또 까먹었는데 1은 소수가 아니다;;

*/

const fs = require('fs');
const input = fs.readFileSync(
    '/data/data/com.termux/files/home/devSeungBin/ps-archive/baekjoon/bronze/2/077_2581/testcase/01_case.txt', 'utf8').trim().split('\n');

const [M, N] = input.map(Number);
const A = [];

for (let i = M; i <= N; i++) {
    let isPrime = true;

    for (let j = 1; j * j <= i; j++) {
        if (i % j === 0) {
            if (j !== 1) {
                isPrime = !isPrime;
                break;
            }
        }
    }

    if(i !== 1 && isPrime) A.push(i);
}

console.log(`${A.length === 0 ? -1 : A.reduce((acc, cur) => acc + cur, 0) + '\n' + A[0]}`);