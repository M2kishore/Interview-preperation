//https://leetcode.com/problems/set-matrix-zeroes/submissions/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let col0 = 1;
    for(let i=0;i<row;i++){
        if(matrix[i][0] === 0){
            col0 = 0;
        }
            for(let j=1;j<col;j++){
                if(matrix[i][j] === 0){
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
    }
    for(let i=1;i<row;i++){
        for(let j=1;j<col;j++){
            if(matrix[0][j] === 0 || matrix[i][0] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(matrix[0][0] == 0){
        for(let j = 0;j<col;j++){
            matrix[0][j] = 0;
        }
    }
    if(col0 === 0){
        for(let i=0;i<row;i++){
            matrix[i][0] = 0;
        }
    }
};
