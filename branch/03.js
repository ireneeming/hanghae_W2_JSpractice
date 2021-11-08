/*
Q3. 
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
    var answer = '';
    let length = s.length;
    let odd = s.length/2;
    let even = s.length/2-1;
    
   console.log(s)
    
     if (length % 2 == 0){ //가운데 두글자
        answer = s[even]+s[odd];
         console.log(answer)
         return answer;
        
        
     }else{//가운데 한글자
          answer = s[Math.floor(odd)];
         console.log(answer)
          return answer;
     }
        
        
    
}