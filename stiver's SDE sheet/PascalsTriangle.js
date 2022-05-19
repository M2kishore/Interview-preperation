//https://leetcode.com/problems/pascals-triangle/submissions/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i=0;i<numRows;i++){
        let temp = [];
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i){
                temp.push(1);
            }else{
                temp.push(result[i-1][j-1] + result[i-1][j])
            }
        }
        result.push(temp);
    }
    return result;
};
