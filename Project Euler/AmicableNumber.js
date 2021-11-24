//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-21-amicable-numbers
// Compute and store divisors
const DIVISOR_SUMS = Array(10000).fill(0);
function sumDivisors(n) {
  // Return early if result already stored
  if (DIVISOR_SUMS[n])
    return DIVISOR_SUMS[n];
  // Compute divisor sum
  let sum = 1;
  let sqrt = Math.floor(Math.sqrt(n));
  for (let i = 2; i < sqrt; i++) {
    if (n % i === 0)
      sum += i + n / i;
  }
  if (n % sqrt === 0)
    sum += sqrt;
  // Store and return result
  console.log(DIVISOR_SUMS[n] = sum);
  return DIVISOR_SUMS[n] = sum;
}

function sumAmicableNum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    let possiblePair = sumDivisors(i);
    if (possiblePair !== i && sumDivisors(possiblePair) === i)
      sum += i;
  }
  return sum;
}
sumAmicableNum(1000);