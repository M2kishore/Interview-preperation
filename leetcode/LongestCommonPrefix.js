//https://leetcode.com/problems/longest-common-prefix/submissions/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0;
    while(strs[0][i] && strs.every((str)=>str[i] === strs[0][i])){
          i++;
    }
    return strs[0].substr(0,i);
};