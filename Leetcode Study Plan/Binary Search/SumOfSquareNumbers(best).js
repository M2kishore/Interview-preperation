//https://leetcode.com/problems/sum-of-square-numbers/submissions/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i=0;i*i<=c;i++){
        let b = c-(i*i);
        if(Number.isInteger(Math.sqrt(b))){
            return true;
        }
    }
    return false;
};
