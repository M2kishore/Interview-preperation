//https://leetcode.com/problems/count-and-say/submissions/
/**
 * @param {number} n
 * @return {string}
 */
let findCunt=(str)=>{
    let stack = [];
    let resultStr = "";
    for(let i=0;i<=str.length;i++){
        let stackTop = stack[stack.length-1];
        if(stack.length > 0 && stackTop !== str[i]){
            resultStr += stack.length+ '' + stackTop;
            stack = [];
        }
        stack.push(str[i]);
    }
    return resultStr;
}
var countAndSay = function(n) {
    let i = 1;
    let result = "1";
    while(i <= n){
        if(i !== 1)
        result = findCunt(result);
        i++;
    }
    return result;
};
