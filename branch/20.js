function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let a=0; a<participant.length;a++){
        if(participant[a] !== completion[a]){
            return participant[a]
        }
            
    }
}