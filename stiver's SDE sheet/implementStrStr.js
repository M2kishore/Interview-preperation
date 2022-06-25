//https://leetcode.com/problems/implement-strstr/submissions/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === ""){
        return 0;
    }
    let needleLength = needle.length;
    let currentCount = 0;
    for(let i=0;i<haystack.length;i++){
        if(haystack.charAt(i) === needle.charAt(0)){
            for(let j=i;j<i+needleLength;j++){
                if(haystack.charAt(j) === needle.charAt(j-i)){
                   currentCount++;
                }
            }
            if(currentCount === needleLength){
                return i;
            }
            currentCount = 0;
        }
    }
        return -1;
};
