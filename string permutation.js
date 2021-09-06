https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please



function permAlone(str) {
  let permutations = [];
  let stringArray = str.split("");

  function generatePermutations(n){
  if(n==1){
    permutations.push(stringArray.join(""));
  }else{
    for(let i=0;i<n;i++){
      generatePermutations(n-1);
      //swap
      if(n%2){
        let temp = stringArray[n-1];
        stringArray[n-1] = stringArray[0];
        stringArray[0] = temp;
      }else{
        let temp = stringArray[n-1];
        stringArray[n-1] = stringArray[i];
        stringArray[i] = temp;
      }
    }
  }
}
generatePermutations(str.length);
permutations = permutations.filter((string)=>{
  return !string.match(/(.)\1+/);//match consecutive characters
});
console.log(permutations.length);

return permutations.length;

  //using heap's algorithm
}

permAlone('aab');
