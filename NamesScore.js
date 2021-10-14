//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-22-names-scores
function wordScore(word){
  return [...word].reduce((accumulator, character)=>{
    return accumulator += character.charCodeAt()-64;
  },0);  
}
function namesScores(arr) {
  arr = [...arr].sort();
  arr.unshift('');
  let total = 0;
  for(let i=1;i<arr.length;i++){
    total += (wordScore(arr[i]))*i;
  }
  return total;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
console.log((wordScore("ABCDE")))