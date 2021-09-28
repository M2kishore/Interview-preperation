//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
function multiplesOf3and5(number) {
  const numof3 = Math.floor((number - 1)/3,10);
  const sum3 = (numof3 * (numof3+1)/2) * 3;
  const numof5 = Math.floor((number-1)/5,10);
  const sum5 = (numof5 * (numof5+1)/2) * 5;
  const numof15 = Math.floor((number-1)/15,10);
  const sum15 = (numof15 * (numof15+1)/2) * 15;
  return sum3 + sum5 - sum15;
}

console.log(multiplesOf3and5(10));