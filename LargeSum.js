//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-13-large-sum
function largeSum(arr) {
  let sum = arr.reduce((sum,item)=>{
    return sum + Number(item);
  },0);
  let str = sum.toString().split('e')[0];
  let result = 1e+9 * str.slice(0,11);
  return result;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));