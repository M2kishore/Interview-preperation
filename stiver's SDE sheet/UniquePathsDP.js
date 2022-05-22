//https://leetcode.com/problems/unique-paths/submissions/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = [];
    for(let i=0;i<m;i++){
        matrix[i] = new Array(n).fill(-1);
    }
    let rec = recursive(m-1,n-1,matrix);
    return rec;
};
let recursive = (i,j,matrix)=>{
    if(i === 0 && j === 0){
        return 1;
    }
    if(i<0 || j<0){
        return 0;
    }
    if(matrix[i][j] != -1){
        return matrix[i][j];
    }
    let top = recursive(i-1,j,matrix);
    let left = recursive(i,j-1,matrix);
    matrix[i][j] = top+left;
    return matrix[i][j];
}
