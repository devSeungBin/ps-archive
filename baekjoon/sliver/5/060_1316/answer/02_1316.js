/*

0. 나타난 문자를 저장하는 집합 생성
1. 단어의 처음부터 순회하며, 직전에 순회한 문자 1개만을 임시로 저장
2. 임시 저장한 문자와 다른 문자가 나타나고, 집합에 있는 문자인지 확인
    2-1. (true) 그룹 단어가 아님을 저장하고, 순회 종료
    2-2. (false) 아직까지는 그룹 단어이므로 패스
3. 임시 저장한 문자를 집합에 추가하고, 현재 문자를 임시 저장

그룹 단어가 맞으면 카운트 +1

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
    const word = input[i];
    const seen = new Set();

    let prev = '';

    let isGroup = true;

    for (const ch of word) {
        if (ch !== prev && seen.has(ch)) {
            isGroup = false;
            break;
        }

        seen.add(ch);
        prev = ch;
    }

    if (isGroup) count++;
}

console.log(count);
