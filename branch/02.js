/*
Q2. 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

function solution(num) {
    var answer = '';
    if (num%2==0){
        answer = "Even";
    }else{
        answer = "Odd";
    }
    return answer;
}


// if 문 축약형태
// condition ? expr1(참일때)  : expr2(거짓일때)

function solution(num) {
   return num % 2 == 0 ? "Odd" : "False";
}


// == 값이 같을 때
// === 타입까지 같을 때