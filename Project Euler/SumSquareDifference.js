//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-6-sum-square-difference
function sumSquareDifference(n) {
  let squareSum = (n*(n+1)*(2*n+1))/6;
  let sumSquare = (n*(n+1))/2;

  return (sumSquare*sumSquare) - squareSum;
}

sumSquareDifference(100);