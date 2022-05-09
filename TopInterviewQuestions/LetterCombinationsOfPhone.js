//https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const result = [];
    const dfs = (i,s)=>{
        if(i === digits.length){//when every button is used it prints
            result.push(s);
            return;
        }
        for(let letter of map[digits[i]]){//iterates through each letter in the number mapped to it
            dfs(i+1,s+letter);//adds the letter and increase the length
        }
    }
    dfs(0,"");//initiate the function
    return result;
};
