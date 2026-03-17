const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n] = input[0].split(' ').map(Number);

for (let i = 1; i <= n; i++) {
    const a = input[i].split(' ').map(Number);
    const b = input[i + n].split(' ').map(Number);

    console.log(a.map((v, j) => v + b[j]).join(' '));
}
