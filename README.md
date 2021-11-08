# 2021-11-08 / W2 Day+1
Programmers Javascript 알고리즘 문제풀이 Q1 ~ Q8

[TIL]

Q1.
console.log() 는 줄바꿈이 포함되어있는 함수
process.stdout.write()을 쓰면 줄바꿈 없이 한 줄에 값 출력 가능

Q2.
3항 연산자 (if 문을 간단하게!)
[형식]
condition ? 'true' : 'false';

Q3.
Math.floor() : 이 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

Q5. 
parseInt() : string 을 int 값으로 변환하는 함수

Q6.
* 배열의 교집합, 차집합 구하기
array.filter() : 

let a = [1, 2, 3]
let b = [1, 2, 3, 4]

* 두 배열의 교집합 구하기
console.log(a.filter(x => b.includes(x)))

* 두 배열의 차집합 구하기 
console.log(a.filter(x => !b.includes(x)))

Q8.
* 배열의 합 구하기
array.reduce (function add(a,b){return a+b;})
화살표 함수로 변환 -> array.reduce((a,b)=> a+b)




