/*

약수를 담을 빈 배열 a를 만든다.

주어진 n의 약수를 구하기 위해, 1부터 루트 n까지 나눈 뒤
나머지가 0이 나오는 수와 그 몫을 a에 넣는다.

그 후 a를 오름차순으로 정렬한 뒤 자기 자신을 제외한 약수들을 전부 더해서
자기 자신과 같게 나온다면 완전수로 판단한다.

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = input.map(Number);
const output = [];

for (let i = 0; n[i] !== -1; i++) {
    const a = [];
    for (let j = 1; j * j <= n[i]; j++) {
        if (n[i] % j === 0) {
            a.push(j);
            if(j !== n[i]/j) a.push(n[i]/j);
        }
    }

    a.sort((a, b) => a - b);

    const b = a.pop();
    if (a.reduce((acc, cur) => acc + cur, 0) === b) output.push(`${b} = ${a.join(' + ')}`);
    else output.push(`${b} is NOT perfect.`);
}

console.log(output.join('\n'));