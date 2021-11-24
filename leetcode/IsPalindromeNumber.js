//https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString().split('');
    let len = x.length;
    let half = Math.floor(x.length/2);
    let i = 0;
    while(i<=half){
        if(x[i] !== x[len-i-1]){
            return false;
        }
        i++;

    }
    return true;  
};