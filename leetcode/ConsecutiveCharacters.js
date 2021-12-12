//https://leetcode.com/problems/consecutive-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
   let count = 0;
    let maxCount = 0;
    let prev = "";
    for(let i = 0;i<s.length;i++){
        let cur = s.charAt(i);
        if(prev === cur){
            count++;
        }else{
            count = 1;
            prev = cur;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};