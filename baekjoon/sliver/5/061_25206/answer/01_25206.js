/*

1. 전공과목 수만큼 순회하며 (학점 × 과목평점)의 합, 학점의 총합을 누적한다
2. (학점 × 과목평점)의 합을 학점의 총을으로 나누어 결과를 구한다

학점을 점수로 환산할 때 (A, B, C, D) -> (4, 3, 2, 1)로 변환하며 +가 붙으면 0.5를 더한다
만약 학점이 P 또는 F이면 건너뛴다

*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const gradeTable = [4, 3, 2, 1];

let sum = 0;
let weightedSum = 0;

for (const major of input) {
    const [, creditStr, grade] = major.split(' ');
    
    if (grade === 'P') continue;

    const point = grade === 'F' 
                ? 0 
                : gradeTable[grade.charCodeAt(0) - 65] + (grade[1] === '+' ? 0.5 : 0);
    const credit = +creditStr;

    sum += credit;
    weightedSum += point * credit;
}

console.log(sum ? weightedSum / sum : 0);
