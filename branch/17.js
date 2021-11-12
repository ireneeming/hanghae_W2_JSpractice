function solution(s) {
    //숫자포함 확인
  if(s.length === 4 || s.length === 6){
      
      console.log(s.split(''))
	return s.split("").every((b)=>!isNaN(b))
	}
    return false;
}