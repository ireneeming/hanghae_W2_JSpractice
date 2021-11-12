# 2021-11-08 / W2 Day+1
Programmers Javascript 알고리즘 문제풀이 Q1 ~ Q8</br>
velog : https://velog.io/@ireneeming
[TIL]

Q1.</br>
console.log() 는 줄바꿈이 포함되어있는 함수</br>
process.stdout.write()을 쓰면 줄바꿈 없이 한 줄에 값 출력 가능

Q2.</br>
3항 연산자 (if 문을 간단하게!)</br>
[형식]</br>
condition ? 'true' : 'false';

Q3.</br>
Math.floor() : 이 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.</br>
참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

Q5. </br>
parseInt() : string 을 int 값으로 변환하는 함수

Q6.</br>
* 배열의 교집합, 차집합 구하기</br>
array.filter() : 

  let a = [1, 2, 3]</br>
  let b = [1, 2, 3, 4]

* 두 배열의 교집합 구하기</br>
console.log(a.filter(x => b.includes(x)))

* 두 배열의 차집합 구하기 </br>
console.log(a.filter(x => !b.includes(x)))

Q8.
* 배열의 합 구하기
array.reduce (function add(a,b){return a+b;})</br>
화살표 함수로 변환 -> array.reduce((a,b)=> a+b)




<hr>

Q9.
substring() 함수로 string 특정 영역 추출하여 replace 시키려고 했다.
그러나,,,, 문자열에서 특정 인덱스의 문자를 바꿔주는 메소드는 자바스크립트에 없다고 한다,,,
참고: https://nacastle.tistory.com/44  그냥 그 분을 잘라서 붙여넣기,,,

.slice() 함수를 이용하여 처음부터 뒤에서 4번째 숫자까지 잘라준다. => .slice(0,-4)


Q10.
.map()함수이용하기

Q11. 
.push()

Q12.
3항연산자 이용해서 풀기

Q13. 

Q14. 
.push(), .sort() 이용하기

Q.15

Q.16
.toLowerCase()
.split()

Q17. 
.every()
!isNaN

Q.18
.indexOf()

Q.19
.join('') 이용하여 행렬을 string 으로 변환

Q.20
.sort()

Q.21
.split(' ')  => split('공백')하면 띄어쓰기를 기준으로 string 을 배열로
.charAt()
.slice()

Q.22
.toString().split('')
.parseInt(문자) => 문자형을 숫자형으로 바꾸기

Q.23
.reverse() 배열 뒤집기

Q.24
.sort((a,b)=> b-a) 내림차순

Q.25
Math.sqrt(n) 루트 사용하기
Number.isInteger //정수인지 판별하기 true/false
Math.pow //제곱하기

Q.26
Math.min.apply(null,배열) //배열 중 최소값
.indexOf(값) //그 값의 인덱스 위치 

Q.27
콜라츠함수

Q.28
.parseInt() 사용





