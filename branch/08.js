/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

function solution(arr) {
    // var answer = 0;
    // return answer;
    
    //arr 형태 확인하기
    //nsole.log(arr);
    
    //reduce() 함수로 평균값 구해보기
    
    //->  reduce() 로 배열의 합 구한 후 배열 값으로 나누기
    // let sum = arr.reduce((a,b)=> a+b)
    // let length = arr.length;

    let avg = arr.reduce((a,b)=> a+b)/arr.length;
    
    //cone.log(avg)
    return avg;
    
}