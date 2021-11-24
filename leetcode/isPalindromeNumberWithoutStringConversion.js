//https://leetcode.com/problems/palindrome-number/submissions/
//check palindrom without convertion to String
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copy = x;
    let rev = 0;
    while(x>0){
        let digit = x%10;
        rev = rev*10 + digit;
        x = Math.floor(x/10);
    }
    return copy === rev;
};
