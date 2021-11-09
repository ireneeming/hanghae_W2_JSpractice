/*함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.*/

// 우선, 결과값처럼 숫자가 늘어나는 공식을 만든 뒤, 배열에 끼워넣기
// .push() 함수 사용하여 배열에 하나씩 집어넣기
function solution(x, n) {
    var answer = [];
    for(let a = 1; a<=n; a++){
        answer.push(x*a);
    }
    return answer;
}