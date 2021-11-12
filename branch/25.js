function solution(n) {
    
    let sqrt = Math.sqrt(n);
    let answer = 0;
    console.log(Number.isInteger(sqrt))
    
    if(Number.isInteger(sqrt)==true){
        answer = Math.pow(sqrt+1,2)
        //console.log(answer)
    }else{
        answer = -1
    }
    
    return answer;
    
}