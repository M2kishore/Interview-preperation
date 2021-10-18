//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers
function fiboEvenSum(n) {
  let pointer1 = 1;
  let pointer2 = 2;
  let sum = 2;
  while(pointer2 <= n){
    pointer2 = pointer1+ pointer2;
    pointer1 = pointer2 - pointer1;
    if(pointer2%2 === 0){
      sum+=pointer2;
    }
  }

  return sum;
}