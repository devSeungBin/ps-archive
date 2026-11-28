/*

01의 개선안

1.  이 문제는 소수들의 합과 소수의 최솟값만을 출력하면 되므로, 소수를 모을 배열을 따로 만들지 말고 바로 합과 최솟값을 구하면 편하다.
    따라서 배열 A를 없애고 변수 sum과 min을 활용한다.

2.  소수를 판별할 때, 1부터 나누는 것이 아닌 2부터 나누면 "약수가 1이 아닌경우를 소수로 판별"하는 과정을 줄일 수 있다.

3.  소수가 아닐 때 isPrime 변수에 false라는 명확한 값을 넣어주면 가독성이 좋다.

4.  그리고 삼항연산자 남발좀 그만해라,, 그거 남들이 보면 읽기 힘들다,,

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [M, N] = input.map(Number);
let sum = 0, min = 0;

for (let i = M; i <= N; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (i !== 1 && isPrime) {
        if (sum === 0) min = i;
        sum += i;
    }
}

if (sum === 0) console.log(-1);
else console.log(sum + '\n' + min);