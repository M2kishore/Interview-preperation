//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++){
        let arr = grid[i];
        let left = 0;
        let right = arr.length-1
        while (left <= right){
            if (arr[0] < 0) {
                count += arr.length;
                break;
            }
            let mid = Math.floor((left + right)/2);
            if ((arr[mid] >= 0) && arr[mid+1]<0){
                count += arr.length-mid-1;
                break;
            }else if (arr[mid] >= 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return count;
};
