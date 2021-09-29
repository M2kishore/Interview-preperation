//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product
function largestPalindromeProduct(n) {
  let max = Math.pow(10,n)-1;
  let min = (max+1)/10;
  let result = [];

  for(let i = max; i>=min; i--){
    for(let j = max; j>=min;j--){
      let num = i*j;
      let reverse = [...String(num)].reverse().join("");
      if(num == reverse){
        result.push(num);
        break;
      }
    }
  }
  return Math.max(...result);
}

largestPalindromeProduct(3);
