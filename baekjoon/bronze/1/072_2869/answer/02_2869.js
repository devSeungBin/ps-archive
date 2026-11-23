/*

(1 ≤ B < A ≤ V ≤ 1,000,000,000)

주어지는 V 범위가 크다보니 반복문의 조건으로 걸었을 때 반복되는 횟수가 억을 넘어가 시간 초과가 났다.

뺄셈이 계속되는 반복문이 아닌, 나눗셈으로 바로 계산하는 방법을 생각해보자.

낮과 밤을 이동하는 미터는 A-B이고, 마지막 날 낮에 A만큼 이동했을 때 V미터에 도달하거나 넘어서면 도착한거다.

이걸 수식으로 정리하면
(A - B) * n + A >= V
(A - B) * n >= V - A
n >= (V - A) / (A - B)

가 된다.

여기서 n은 정수라는 조건이 있기에 (V - A) / (A - B)가 소수인 경우 올림한다.

마지막날 낮에 A미터만큼 움직이므로 해당 날짜도 포함시켜야하므로 n+1이 최종 답이다~

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const [A, B] = input.map(Number);
let V = +input[2];
let n = Math.ceil((V - A) / (A - B)) + 1;

console.log(n);