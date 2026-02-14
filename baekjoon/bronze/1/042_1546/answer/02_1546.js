const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const subjectCount = input[0];
const scoreArr = input.slice(1);
const maxScore = Math.max(...scoreArr);

const avgScore = scoreArr.reduce((totalScore, score) => {
        return totalScore + (score / maxScore * 100)
    }, 
    0
) / subjectCount;

console.log(avgScore);
