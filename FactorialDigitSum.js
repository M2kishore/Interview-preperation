//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-20-factorial-digit-sum
function sumFactorialDigits(n) {
  let fact = BigInt(1);
  for(let i=1;i<=n;i++){
    fact = fact * BigInt(i);
  }
  let sum = 0;
  fact = fact.toString().split('');
  fact.map((number)=>{
    sum += +number;
  });
  console.log(sum)
  return sum;
}

sumFactorialDigits(10);