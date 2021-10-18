//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-12-highly-divisible-triangular-number
function factorsCount(n){
  let count = 0;
  for(let i=1;i<Math.sqrt(n);i++){
    if(n%i === 0){
      count+=2;
    }
  }
  count = count%Math.sqrt(n)===0? count+1 : count;
  return count;  
}
function divisibleTriangleNumber(n) {
  let i=0;
  let triangleNumber = i;
  while(factorsCount(triangleNumber) < n){
    triangleNumber = (i*(i+1))/2;
    i++;
  }
  return triangleNumber;
}

divisibleTriangleNumber(500);
