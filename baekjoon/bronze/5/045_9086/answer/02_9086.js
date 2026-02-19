const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const words = input.slice(1);
const result = words.reduce((prevArr, word) => {
    prevArr.push(word.at(0) + word.at(-1));
    return prevArr;
}, []);

console.log(result.join('\n'));
