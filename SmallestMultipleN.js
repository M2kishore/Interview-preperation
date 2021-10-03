httpswww.freecodecamp.orglearncoding-interview-prepproject-eulerproblem-5-smallest-multiple
function smallestMult(n) {

  function lcm(a,b){
    return (ab)gcd(a,b);
  }
  function gcd(a,b){
    if(b === 0){
      return a;
    }
    return gcd(b,a%b)
  }
  let MaxLcm = 1;
  for(let i=2;i=n;i++){
    MaxLcm = lcm(MaxLcm,i);
  }
console.log(MaxLcm)
  return MaxLcm;
}

smallestMult(20);