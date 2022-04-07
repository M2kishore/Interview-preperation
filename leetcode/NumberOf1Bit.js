//https://leetcode.com/problems/number-of-1-bits/submissions/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let numOf1s = 0;
    let nString = n.toString(2);
    for(let i=0;i<nString.length;i++){
        if(nString[i] === '1'){
            numOf1s += 1;
        }
    }
    return numOf1s;
    
};
