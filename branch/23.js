function solution(n) {
    var answer = [];

    let toarr = n.toString().split('').reverse()
     
    for(let i=0; i<toarr.length;i++) {
        answer.push(parseInt(toarr[i]));
    }
    
    return answer;
}