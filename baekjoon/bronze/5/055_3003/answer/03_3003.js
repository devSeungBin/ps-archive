const fs = require('fs');
const [king, queen, rooks, bishops, knights, pawns] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(`${1 - king} ${1 - queen} ${2 - rooks} ${2 - bishops} ${2 - knights} ${8 - pawns}`);
