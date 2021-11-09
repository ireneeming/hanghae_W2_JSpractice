/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
    // var answer = [];
    // return answer;
    
    // 1. 우선 for 문으로 arr 를 divisor 로 나눠본다. 
    // 2. 나머지 값이 0인걸로 찾으면 된다는 것을 파악한다.
    // 3. 3항 연산자를 사용하여, 나머지가 0 이면  arr를, 아니면 -1를 출력하는 식을 세운다.
    // 4. 3항연산자로 나온 값을 push를 이용하여 answer 배열에 저장한다. 
    // 5. 오름차순으로 push 하는 방법을 찾는다.
    // 6. -1을 안나오게 하는 방법을 찾는다. 
   
    let answer=[] ; 
    for(let a = 0 ; a<arr.length; a++){
        // result[a] = arr[a] % divisor == 0 ? arr[a] : -1      
        if(arr[a] % divisor == 0) answer.push(arr[a])
    }
     if (answer.length==0){
            answer.push(-1)
        }
    answer.sort((a,b)=>a-b) //오름차순으로 정렬
    return answer
}