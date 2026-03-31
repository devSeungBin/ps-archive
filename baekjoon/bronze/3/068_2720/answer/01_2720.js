/*

--------------------------------------
[아이디어]

각 동전은 자신보다 작은 동전들로 같은 금액을 만들 수 있지만,
항상 더 많은 개수가 필요

예:
25 (1개) = 10 + 10 + 5 (3개)
10 (1개) = 5 + 5 (2개)
5  (1개) = 1 + 1 + 1 + 1 + 1 (5개)

>> 가능한 한 큰 동전을 먼저 사용하는 것이 항상 최적 (그리디 성립)

--------------------------------------
[정의]

coins : 사용 가능한 동전 배열 (큰 값부터 정렬)
c     : 현재 남은 금액
count : 해당 동전을 사용할 수 있는 최대 개수

--------------------------------------
[구현]

각 동전에 대해 금액이 큰 동전부터:

1. 현재 금액에서 해당 동전을 최대 몇 개 사용할 수 있는지 계산
   count = Math.floor(c / coin)

2. 사용한 만큼 금액 차감
   c %= coin

3. 결과 배열에 개수 저장

>> 큰 동전부터 순서대로 반복하면 최적해 완성

--------------------------------------
[요약]

큰 동전을 먼저 최대한 사용하는 전략이 항상 최적이므로
DP 없이 Greedy로 해결 가능

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const t = +input[0];

const coins = [25, 10, 5, 1];
const output = [];

for (let i = 1; i <= t; i++) {
    let c = +input[i];
    const counts = [];

    for (const coin of coins) {
        const count = Math.floor(c / coin);
        c %= coin;
        counts.push(count);
    }

    output.push(counts.join(' '));
}

console.log(output.join('\n'));
