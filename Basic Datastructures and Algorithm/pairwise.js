https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

function pairwise(arr, arg) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == arg
          && !pairs.includes(i)
          && !pairs.includes(j)) {
        pairs.push(i, j);
        break;
      }
    }
  }
  let sum = pairs.reduce((sum, curr, index) => sum + curr, 0);
  return sum;
}

pairwise([1,4,2,3,0,5], 7);