function solution(x) {
   
    let digit = x.toString().split('')
    let sum = 0;
    
    for(let a = 0 ; a < digit.length; a++){       
       sum += parseInt(digit[a])      
    }
      if(x % sum == 0){
          //나누어 떨어질 ㄸㅐ
          return true
          
      }else{
          
          return false
      }
    
}