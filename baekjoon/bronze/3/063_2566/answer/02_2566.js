const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [max, r, c] = [-Infinity, 0, 0];

input.forEach((line, i) => {
    line.split(' ').forEach((v, j) => {
        v = +v;
        if (v > max) {
            max = v;
            r = i + 1;
            c = j + 1;
        }
    });
});

console.log(`${max}\n${r} ${c}`);
