/* 

알파벳 분류
A. ~= : c, s, (z, dz)
B. ~- : c, d
C. ~j : l, n

로직
1. 문자열의 끝부터 반복 시작
2. 위 분류의 해당하는 문자가 존재하는지 검사
    2-1. 존재 시, 각 분류에 따른 패턴 검사 시작 -> dz=는 인덱스를 -3, 그외 패턴은 인덱스를 -2, 패턴이 없으면 인덱스를 -1 
    2-2. 미존재 시, 인덱스를 -1
3. 카운트를 +1

주의할 점
1. 문자열 반복 조건은 인덱스가 양수일 때
2. 패턴 검사를 위한 문자열 접근 시 인덱스가 음수가 될 때

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let index = input.length - 1;
let count = 0;

while (index >= 0) {
    if (index === 0) {
        count++;
        break;
    }

    switch (input[index]) {
        case "=":
            if (input[index - 1] === 'c' || input[index - 1] === 's') {
                index -= 2;

            } else if (input[index - 1] === 'z') {
                if (index - 2 >= 0 && input[index - 2] === 'd') index -= 3;
                else index -= 2;

            } else {
                index--;
            }

            break;

        case "-":
            if (input[index - 1] === 'c' || input[index - 1] === 'd') index -= 2;
            else index--;
            break;

        case "j":
            if (input[index - 1] === 'l' || input[index - 1] === 'n') index -= 2;
            else index--;
            break;

        default:
            index--;
    }

    count++;
}

console.log(count);
