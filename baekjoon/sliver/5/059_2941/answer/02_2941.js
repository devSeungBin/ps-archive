const fs = require('fs');
let input = fs.readFileSync(0,'utf8').trim();

const replacementWords = ['c=', 'c-', 'dz=','d-','lj','nj','s=','z='];

for (const word of replacementWords) {
    input = input.split(word).join('_');
}

console.log(input.length);
