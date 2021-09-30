//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime
function nthPrime(n) {
  const primes = [2];
  let num = 3;
  let isPrime = true;

  while(primes.length < n){
    let max = Math.ceil(Math.sqrt(num));

    for(let i=0;primes[i]<=max;i++){
      if(num % primes[i] == 0){
        isPrime = false;
        break;
      }
    }
    console.log(primes)
    if(isPrime) primes.push(num);
    isPrime = true;
    num += 2;
  }
  console.log(primes)
  return primes[primes.length-1];
}

nthPrime(10001);