//https://leetcode.com/problems/kth-missing-positive-number/submissions/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]-mid-1 < k){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return left+k;
};
