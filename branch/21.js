function solution(s) {
    let arr = s.split(' ');
    let arr2 = '';

    for (let b = 0; b < arr.length; b++) {
        for (let a = 0; a < arr[b].length; a++) {
            if (a % 2 == 0) {
                //짝수일때
                arr2 += (arr[b].charAt([a]).toUpperCase())
            } else {
                arr2 += (arr[b].charAt([a]).toLowerCase())
            }

        }
        arr2 += ' ';

    }
    arr2 = arr2.slice(0, -1)
    return arr2;

}