//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-25-1000-digit-fibonacci-number
function digitFibonacci(n) {
  let f_0 = 0, f_1 = 1, i = 1;
  while (String(f_1).length < n) {
    console.log(f_1);
    [f_0, f_1] = [f_1, f_0 + f_1];
    i++;
  }
  return i; 
}

console.log(digitFibonacci(20));