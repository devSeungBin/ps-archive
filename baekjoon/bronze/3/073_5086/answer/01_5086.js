/*

A를 B로 나눴을 때 나머지가 없으면 A는 B의 배수

나머지가 있으면 자리를 바꿔서

B를 A로 나눴을 때 나머지가 없으면 A는 B의 약수

나머지가 있으면 두 수는 서로 약수도, 배수도 아님

추가로 ₩s+는 공백과 줄바꿈(\r\n)을 한 번에 모두 구분자로 처리 가능하다

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let n = input.map(Number);

while (n[0] !== 0) {
    console.log(
        n[0] % n[1] === 0 ? 
            "multiple"
            :
            n[1] % n[0] === 0 ?
                "factor"
                :
                "neither"
    );

    n = n.slice(2);
}