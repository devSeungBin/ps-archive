const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const subjectCount = Number(input[0]);
let maxScore = 0;
const scoreArr = input[1].split(' ').map((val) => {
    const score = Number(val);
    if (score > maxScore) maxScore = score;
    return score;
});
let totalScore = 0;

for (const score of scoreArr) {
    const newScore = score / maxScore * 100;
    totalScore += newScore;
}

const avgScore = totalScore / subjectCount;
console.log(avgScore);
