//https://leetcode.com/problems/check-if-n-and-its-double-exist/submissions/
/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function(arr) {
    arr.sort((a, b) => {
    return a - b;
  });
  const search = (num, i) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] == num) {
          console.log(num)
        return true;
      } else if (arr[mid] > num) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && search(arr[i] * 2)) {
      console.log(arr[i]);
      return true;
    }
    if (arr[i] == 0 && arr[i + 1] == 0) {
      return true;
    }
  }
  return false;    
};
