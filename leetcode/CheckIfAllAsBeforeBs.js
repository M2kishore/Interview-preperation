//https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let flag = false;
    for(let i=0;i<s.length;i++){
        if(s[i] === 'a' && flag) return false;
        else if(s[i] === 'b' ) flag = true;
    }
    return true;
};