/*

[아이디어]

현재 금액에서 시작하여, 동전을 하나씩 추가하며 만들 수 있는 금액들을 탐색
이때 각 상태(금액)를 노드로 보고, 동전을 하나 사용하는 것을 간선으로 보면 모든 간선의 비용은 1로 동일한 그래프로 볼 수 있음

따라서 그래프에서 BFS를 사용하면 동전 개수를 1개, 2개, 3개... 순으로 증가시키며 탐색하게 되고,
처음으로 목표 금액 C에 도달했을 때가 최소 동전 개수가 됨

단, 탐색은 목표 금액 C를 넘지 않는 범위에서만 진행

--------------------------------------
[정의]

노드의 상태 정의 : (현재 금액, 지금까지 사용한 동전 개수) > (cur, count)

visited[i] : 금액 i를 방문했는지 여부
queue[] : 다음에 방문할 노드의 대기열 (BFS 탐색을 위한 FIFO 큐)

--------------------------------------
[구현]

초기값:

visited[0] = true, visited[1] ~ visited[C] = false
queue에 (0, 0) 삽입

경로 추적:

문제에서 "각 동전의 개수"를 요구하므로 어떤 동전을 사용했는지 기록 필요
prev 배열에 마지막으로 사용한 동전의 인덱스를 저장


queue가 빌 때까지 반복:

1. queue에서 노드 (cur, count)를 하나 꺼냄

2. cur === C 이면 종료 (최소 동전 개수 count 출력)

3. 각 동전(coins[i])에 대해:
    next = cur + coins[i]

    next <= C (목표 금액을 넘지 않고) && visited[next] == false (방문하지 않았다면) 이면:
        visited[next] = true
        queue에 (next, count + 1) 삽입

--------------------------------------
[요약]

그래프에서 간선 비용이 모두 1인 최단거리 문제로 변환하여 BFS로 해결 + prev 배열로 선택한 동전 기록
마지막에 역추적으로 실제 사용된 동전의 개수 구성 복원

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const t = +input[0];

const coins = [25, 10, 5, 1];
const output = [];

for (let i = 1; i <= t; i++) {
    const c = +input[i];
    
    const queue = [];
    const visited = Array(c + 1).fill(false);
    const prev = Array(c + 1).fill(-1);

    let head = 0;
    queue.push([0, 0]);
    visited[0] = true;

    while (head < queue.length) {
        const [cur, count] = queue[head++];

        if (cur == c) {
            break;
        }

        for (let i = 0; i < coins.length; i++) {
            const next = cur + coins[i];

            if (next <= c && !visited[next]) {
                visited[next] = true;
                queue.push([next, count + 1]);
                prev[next] = i;
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
