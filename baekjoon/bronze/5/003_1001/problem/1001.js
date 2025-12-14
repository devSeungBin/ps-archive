/*

1001 - A-B

문제
두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A-B를 출력한다.


테스트 케이스
입력
3 2

출력
1

*/

const input = require('fs').readFileSync('/data/data/com.termux/files/home/devSeungBin/ps-archive/baekjoon/bronze/5/003_1001/testcase/01_case.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a - b);