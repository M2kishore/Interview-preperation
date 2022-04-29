//https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if(arr.length === 1){
        return 0;
    }
    for(let i=1;i<arr.length-1;i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            return i;
        }
    }
};
