/*

01_5086.js 문제점

1. slice가 반복됨
배열되 길이가 n일 때, slice로 복사한 원소 수는

(n-2) + (n-4) + (n-6) + ... + 4 + 2 + 0 가 됨.

원소를 2개씩 보기 때문에 slice는 총 n/2번 반복되고
slice는 반복될 때마다 매번 ((n-2)+0)/2 = n/2-1, 평균 n/2개쯤 원소를 복사하므로
대략 O(n^2)가 되어 주어진 원소 수가 많아지면 시간초과가 날 가능성이 있음.

따라서 기존에 주어진 배열을 그대로 두고, 인덱스로 접근하는 편이 좋음.

2. console.log가 반복됨
출력이 많으면 느려질 수 있음 

따라서 새 배열에 결과를 모아서 한 번에 출력하는 편이 좋음.

3. 이건 개인적인건데 삼항연산자는 가독성이 떨어질 수 있어서 그냥 조건문으로 바꿈

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const n = input.map(Number);
const output = [];

for (let i = 0; i + 1 < n.length; i += 2) {
    const a = n[i], b = n[i + 1];

    if (a === 0 && b === 0) break;

    if (a % b === 0) output.push("multiple");
    else if (b % a === 0) output.push("factor");
    else output.push("neither");
}

console.log(output.join('\n'));