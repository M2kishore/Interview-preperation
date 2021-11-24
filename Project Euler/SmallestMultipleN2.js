//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple
function smallestMult(n) {
  let arr = [];
  for(let i=1;i<=n;i++){
    arr.push(i);
  }
for(let i=0;i<n;i++){
  for(let j=i+1;j<n;j++){
    if(arr[j]%arr[i] === 0){
      arr[j] = arr[j]/arr[i];
    }
  }
}
console.log(arr);
let mul = arr.reduce((accumulator,item)=>{
  return accumulator*item;
},1)
console.log(mul)
return mul;
}

smallestMult(10);