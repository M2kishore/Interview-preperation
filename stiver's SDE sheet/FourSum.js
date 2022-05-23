//https://leetcode.com/problems/4sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
  const n = nums.length;
  const results = [];
  
  nums.sort((a, b) => a - b);
  
  const twoSum = (value1, value2, complement, left, right = n - 1) => {
    while (left < right) {
      if (nums[left] + nums[right] === complement) {
        results.push([value1, value2, nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1]) {
          left += 1;
        }
      } else if (nums[left] + nums[right] < complement) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  };
  
  for (let i = 0; i < n - 2; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    for (let j = i + 1; j < n - 1; j += 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      
      twoSum(nums[i], nums[j], target - (nums[i] + nums[j]), j + 1);
    }
  }
  
  return results;
};
