//https://leetcode.com/problems/hamming-distance/submissions/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let num = x ^ y;
    let count = 0;
    num = num.toString(2);
    for(let i=0;i<num.length;i++){
        if(num[i] === '1'){
            count++;            
        }
    }
    return count;
};
