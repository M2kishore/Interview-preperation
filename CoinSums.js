//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-31-coin-sums
const COINS = [1,2,5,10,20,50,100,200]
function coinSums(n) {
  let amount = n*100;
  const ways = Array(n+1).fill(0);
  ways[0] = 1;
  for(let i of COINS){
    for(let j=i;j<=n;j++){
      ways[j] += ways[j-i];
    }
  }
  return ways[n];
}

coinSums(200);