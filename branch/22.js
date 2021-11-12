function solution(n) {
    let answer = 0;
    let string = n.toString().split('');

    for (let a = 0; a < string.length; a++) {

        answer += parseInt(string[a])
    }

    return answer
}