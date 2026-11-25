/*

주어진 숫자 N에 대해서 약수를 구한다.
구한 약수를 넣을 새 배열 A를 만든다.

N을 1부터 루트 N까지 나누며 
나머지가 0이 되는 수를 찾고, 그 수와 몫을 배열에 넣는다.
(만약 그 수와 몫이 같다면 몫은 넣지 않는다.)

끝나면 A를 정렬한 뒤 
K가 A의 길이보다 크다면 0을, 아니면 A[K-1]로 K번째 약수를 찾는다.


Tip. 루트 N을 표현할 때 조건문의 양변을 제곱해서 간단하게 해결할 수 있다.

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const [N, K] = input.map(Number);
const A = [];

for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
        A.push(i);
        if (i !== N / i) A.push(N / i);
    }
}

A.sort((a, b) => a - b);

console.log(A.length >= K ? A[K - 1] : 0);