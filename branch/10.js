/*
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

참고: 다차열 배열의 합 : 
https://code-pervert.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%91%90-%EB%B0%B0%EC%97%B4%EC%9D%98-%ED%95%A9-Matrix-Addition
*/ 

function solution(arr1, arr2) {
    //var answer = [[]];

    
        let resultArr = [],
            i;
        for(i = 0; i < arr1.length; i += 1){
          resultArr.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]));
    }
    return resultArr; // [[3, 6, 8,], [5, 7, 12,]]
  
}


