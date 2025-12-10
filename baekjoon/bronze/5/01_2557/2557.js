/* 
내용을 출력할 수 있는 console.log()를 사용해서 문제 해결.

근데 다른 풀이과정을 알아보니 process.stdout.write()라는 처음보는 메서드 발견.

이게 뭔지 알아봐야겠다. 

------------------------------------------------

궁금한 내용

1. 브라우저 JS vs Node.js JS 차이
→ 왜 백준 JS는 브라우저가 아닌 Node에서 실행되는가

2. Node.js의 I/O 모델 구조
→ 이벤트 루프/싱글 스레드 비동기 모델
→ stdout·stdin 개념

3. Node.js에서 출력이 어떻게 동작하는가
→ stdout을 기반으로 console.log, stdout.write 개념 연결

4. console.log vs process.stdout.write 차이

*/