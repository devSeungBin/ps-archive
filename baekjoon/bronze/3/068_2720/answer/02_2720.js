/*

[아이디어]

작은 금액부터 차례대로 최소 동전 개수를 구하기
현재 금액 C를 만들 때, 하나의 동전을 선택하고 나머지 금액(C - coin)은 이미 구한 최적해(dp)를 사용

--------------------------------------
[정의]

dp[C]   : C원을 만들기 위한 최소 동전 개수
prev[C] : C원을 만들 때 마지막에 사용한 동전의 인덱스

--------------------------------------
[구현]

점화식: 

dp[C] = min(dp[C], dp[C - coin] + 1)

"dp[C - coin] + 1"
- coin 하나 사용 (+ 1)
- 나머지는 dp[C - coin] 개수 사용 (이미 구해진 최적해)

초기값:

dp[0] = 0                  // 0원은 동전 0개
dp[1 ~ C] = Infinity       // 아직 계산 안됨

경로 추적:

문제에서 "각 동전의 개수"를 요구하므로 어떤 동전을 사용했는지 기록 필요
prev 배열에 마지막으로 사용한 동전의 인덱스를 저장


1부터 C까지 모든 금액에 대해:

1. 각 동전을 하나씩 사용해보며 최소값 갱신, 사용된 동전 기록

2. 사용된 동전의 기록을 토대로 dp[C]를 만들기 위한 각 동전의 개수 구성 계산

--------------------------------------
[요약]

DP로 최소 개수 계산 + prev 배열로 선택한 동전 기록
마지막에 역추적으로 실제 사용된 동전의 개수 구성 복원

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const t = +input[0];

const coins = [25, 10, 5, 1];
const output = [];

for (let i = 1; i <= t; i++) {
    const c = +input[i];
    
    const dp = Array(c + 1).fill(Infinity);
    const prev = Array(c + 1).fill(-1);
    
    dp[0] = 0;

    for (let j = 1; j <= c; j++) {
        for (let idx = 0; idx < coins.length; idx++) {
            const coin = coins[idx];

            if (j - coin >= 0 && dp[j] > dp[j - coin] + 1) {
                dp[j] = dp[j - coin] + 1;
                prev[j] = idx;
            }
        }
    }

    const counts = Array(4).fill(0);
    let cur = c;

    while (cur > 0) {
        const idx = prev[cur];
        counts[idx]++;
        cur -= coins[idx];
    }

    output.push(counts.join(' '));
}

console.log(output.join('\n'));
