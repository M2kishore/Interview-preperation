//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-10-summation-of-primes
function primeSummation(n) {
  let arr = new Array(n+1).fill(false);
  let sum = 0;
  for(let i=2;i<n;i++){
    if(arr[i] === false){
      sum += i;
      let k = i;
      while(k<=n){
        arr[k] = true;
        k=k+i;
      }
    }
  }
  console.log(sum);
  console.log(arr);


  return sum;
}

primeSummation(17);