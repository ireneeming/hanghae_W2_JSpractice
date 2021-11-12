function solution(n) {
    let arr = n.toString().split('')
    
   
     arr.sort((a,b)=>b-a)
    
     let answer = parseInt(arr.join(''))
      return answer
 }