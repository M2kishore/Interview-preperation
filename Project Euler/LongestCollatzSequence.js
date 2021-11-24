//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-14-longest-collatz-sequence
const knownSequence = {
  '1': 1
}
function sequenceCount(limit){
  if(knownSequence[limit]){
    return knownSequence[limit];
  }else{
    const len = limit%2 === 0? sequenceCount(limit/2)+1 : sequenceCount((3*limit)+1) + 1;
    knownSequence[limit] = len;
    return len;
  }
}

function longestCollatzSequence(limit) {
  let max = 1;
  let maxNum = 1;
  for(let i=1;i<=limit;i++){
    let count = sequenceCount(i);
    if(max < count){
      max = count;
      maxNum = i;
    }
  }
  return maxNum;
}

console.log(longestCollatzSequence(14));