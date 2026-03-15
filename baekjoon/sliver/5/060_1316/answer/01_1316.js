/*

0. 문자가 등장한 횟수를 저장하는 배열 생성
1. 단어의 처음부터 순회하며, 직전에 순회한 문자 1개만을 임시로 저장
2. 임시 저장한 문자와 다른 문자가 나타나는지 확인
    2-1. (true) 임시 저장된 문자의 횟수를 +1
    2-2. (false) 패스
3. 문자열의 끝에 도달하면 임시 저장된 문자의 그룹 문자 횟수를 +1 

위 순회에서 그룹 문자 횟수가 +1 될 때마다 해당 문자의 그룹 횟수가 1을 초과했는지 체크.
만약 2 이상이면 동일한 그룹 문자가 2번 이상 등장한 것이므로 순회 종료
순회가 정상적으로 종료되면 그룹 단어의 카운트를 +1

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
    const group = Array(26).fill(0);
    const word = input[i];

    let prev = word[0];

    for (let j = 0; j < word.length; j++) {
        const idx = prev.charCodeAt(0) - 97;

        if (prev !== word[j]) {
            group[idx]++;

            if (group[idx] > 1) break;
        }

        prev = word[j];
    }

    const lastIdx = prev.charCodeAt(0) - 97;
    group[lastIdx]++;

    if (group[lastIdx] === 1) count++;
}

console.log(count);
