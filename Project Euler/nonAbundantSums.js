//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-23-non-abundant-sums
function abundantCheck(number) {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if(number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}
function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  const memo = {};
  let abundantList = [];
  // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
  const checkSum = (num, stack, memo) => {
    for (let i = 0; i < stack.length; i += 1) {
      if ((num - stack[i]) in memo) return true;
    }
    return false;
  };
  for (let i = 1; i <= n; i += 1) {
    if (abundantCheck(i)) {
      abundantList.push(i);
      memo[i] = 1;
    }
    if (checkSum(i, abundantList, memo)) continue;
    sum += i;
  }
  console.log(abundantList)
  return sum;
}
console.log(abundantCheck(12))
sumOfNonAbundantNumbers(100);