/*
06. 
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

references: 
https://velog.io/@mygomi/TIL-69
https://hianna.tistory.com/408
https://www.delftstack.com/ko/howto/javascript/javascript-sum-of-array/
*/


function solution(numbers) {
   
    //1.  numbers 에 값이 잘 들어가는지, 어떤 형태인지 다시한번 체크하기 위해 콘솔 찍어보기
    console.log(numbers);
    
    //두개의 배열을 비교해서 없는 숫자만 찾기
    let origin = [0,1,2,3,4,5,6,7,8,9];
    
    //비교하여 없는 숫자만 다른 배열로 반환하는 함수 .filter()를 이용해서 차집합 구해보기
    //console.log(origin.filter(x => !numbers.includes(x)));
    
    let rest = origin.filter(x => !numbers.includes(x));
    //console.log(rest);
    
    //배열의 합 구하기
    
    
    let sum = rest.reduce((a,b)=> a+b)
   // console.log(sum);
   return sum; 
}