//https://leetcode.com/problems/powx-n/submissions/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let ans = 1;
    let copy = n;
    if(n<0)
        n = n*-1;
    while(n){
        if(n%2 === 0){
            x = x*x;
            n/=2;
        }else{
            ans *= x;
            n--;
        }
    }
    if(copy<0)
        return 1/ans;
    return ans
};
