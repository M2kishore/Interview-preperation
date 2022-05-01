//https://leetcode.com/problems/find-the-distance-value-between-two-arrays/submissions/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2 = arr2.sort((a,b)=>a-b);
    return arr1.filter(x=>isValid(x,arr2,d)).length;
};
function isValid(num,arr,d){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(Math.abs(arr[mid]-num) <= d){
            return false;
        }else if(arr[mid] > num){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return true;
}
