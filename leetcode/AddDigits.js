//https://leetcode.com/problems/add-digits/submissions/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num;
    }
    if (num === 0){
        return 0;
    }
    return num%9 === 0? 9:num%9;
};
