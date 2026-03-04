const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('');

const dialMinTime = input.reduce((totalTime, time) => {
    let addTime;

    switch(time) {
        case 'A': case 'B': case 'C':
            addTime = 3;
            break;
        case 'D': case 'E': case 'F':
            addTime = 4;
            break;
        case 'G': case 'H': case 'I':
            addTime = 5;
            break;
        case 'J': case 'K': case 'L':
            addTime = 6;
            break;
        case 'M': case 'N': case 'O':
            addTime = 7;
            break;
        case 'P': case 'Q': case 'R': case 'S':
            addTime = 8;
            break;
        case 'T': case 'U': case 'V':
            addTime = 9;
            break;
        case 'W': case 'X': case 'Y': case 'Z':
            addTime = 10;
            break;
        default:
            addTime = 0;
            break;
    }

    return totalTime + addTime;
}, 0);

console.log(dialMinTime);
