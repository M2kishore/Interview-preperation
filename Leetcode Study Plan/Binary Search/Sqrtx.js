//https://leetcode.com/problems/sqrtx/submissions/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1;
    let high = x;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let mid_sq = mid*mid;
        if(mid_sq <= x){
            low = mid+1;
        }else if(mid_sq >= x){
            high = mid-1;
        }else{
            return mid;
        }
    }
    return high;
};
