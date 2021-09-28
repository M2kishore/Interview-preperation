//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
function largestPrimeFactor(number) {
  let max = 1;
  let prime = 2;
  for(let i=2;i<=number;i++){
    while(number%i === 0){
      number = number/i;
      max = i;
    }
  }
  console.log(max);
  return max;
}

largestPrimeFactor(8);