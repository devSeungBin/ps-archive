const input = require('fs').readFileSync('/data/data/com.termux/files/home/devSeungBin/ps-archive/baekjoon/bronze/5/015_9498/testcase/01_case.txt', 'utf8').trim();
let grade;

switch(Math.floor(+input / 10)) {
    case 10: case 9:
        grade = 'A';
        break;

    case 8:
        grade = 'B';
        break;

    case 7:
        grade = 'C';
        break;

    case 6:
        grade = 'D';
        break;

    default:
        grade = 'F';
        break;
}

console.log(grade);
