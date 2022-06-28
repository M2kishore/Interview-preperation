//https://leetcode.com/problems/implement-strstr/submissions/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let sufixFunction = (needle)=>{
    let needleLength = needle.length;
    let sufixArray = new Array(needleLength).fill(0);
    for(let i=1;i<needleLength;i++){
        let pointer = sufixArray[i-1];
        while(pointer > 0 && needle[i] != needle[pointer]){
            pointer = sufixArray[pointer-1]
        }
        if(needle[pointer] === needle[i]){
            pointer++;
        }
        sufixArray[i] = pointer;
    }
    return sufixArray;
}
var strStr = function(haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    let sufixArray = sufixFunction(needle+"#"+haystack);
    for(let i=needleLength;i<needleLength+1+haystackLength;i++){
        if(sufixArray[i] === needleLength){
            return i - 2 * needleLength;
        }
    }
    return -1;
};
