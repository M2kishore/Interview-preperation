//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-16-power-digit-sum
function powerDigitSum(exponent) {
  let num = BigInt(2**exponent);
  num = num.toString().split('')
  //num = toString(num);
  let sum = num.reduce((acc,num)=>{
    return acc + +num;
  },0)
  console.log(num,sum);
  return sum;
}

powerDigitSum(128);