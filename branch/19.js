function solution(n) {
  
    let answer =[];
    
    for(let i=0; i<n;i++){
        if(i%2 ==0){ 
            answer.push('수')
        }else {
            answer.push('박')
        }
      
    }
    return answer.join('')
   
    
/* let answer = '';   
for(let i=0; i<n;i++){
    if(i%2==1){     
       answer += '박'
    }else{
        answer +='수'
    }
  }
  return answer*/
    
    
}