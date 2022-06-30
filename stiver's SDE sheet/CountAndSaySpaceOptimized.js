//https://leetcode.com/problems/count-and-say/submissions/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1){
        return "1"
    }
    if(n==2){
        return "11"
    }
    let str = "11";
    for(let i=3;i<=n;i++){
        let resultStr = "";
        str = str+"#";
        let count = 1;
        for(let j=1;j<str.length;j++){
            if(str[j] !== str[j-1]){
                resultStr += count + "" +str[j-1];
                count = 1;
            }else{
                count++;
            }
        }
        str = resultStr;
    }
    return str;
}
    
