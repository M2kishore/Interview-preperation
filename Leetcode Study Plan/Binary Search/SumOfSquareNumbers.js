//https://leetcode.com/problems/sum-of-square-numbers/submissions/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c===1 || c===0)return true;
    for(let a=0;a*a<=c;a++){
        let b = c-(a*a);
        if(search(b)){
            return true
        }
    }
    return false;
};
function search(num){
    if(num === 0 || num === 1)
        return true;
    let left = 1;
    let right = num;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(mid*mid === num){
            return true;
        }else if(mid*mid < num){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return false;
}
