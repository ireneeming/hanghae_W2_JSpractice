function solution(arr) {
    let min = Math.min.apply(null, arr)
    let minIndex = arr.indexOf(min)
    console.log(minIndex)
    
    if (minIndex > 0) {
        //인덱스가 1개 이상일 때
        
      arr.splice(minIndex, 1);
        
    }else{//인덱스가 1개만 있을 떄
      arr.splice(minIndex, 1);
      arr.push(-1)
     
        
    }
    return (arr); 
    

}