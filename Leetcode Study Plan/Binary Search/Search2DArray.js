//https://leetcode.com/problems/search-a-2d-matrix/submissions/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let leftRow = 0;
    let rightRow = matrix.length-1;
    let rows = matrix.length-1;
    let presentRow = -1;
    while(leftRow <= rightRow){
        let midRow = Math.floor((leftRow+rightRow)/2);
        if(matrix[midRow][0] <= target && matrix[midRow][matrix[0].length-1] >= target){
            presentRow = midRow;
            break;
        }else if(target < matrix[midRow][0]){
            rightRow = midRow-1;
        }else{
            leftRow = midRow+1;
        }
    }
    console.log(presentRow)
    if(presentRow === -1){
        return false;
    }
    let leftCol = 0;
    let rightCol = matrix[presentRow].length-1;
    while(leftCol <= rightCol){
        let midCol = Math.floor((leftCol+rightCol)/2);
        if(matrix[presentRow][midCol]  === target){
            return true;
        }else if(matrix[presentRow][midCol] < target){
            leftCol = midCol + 1;
        }else{
            rightCol = midCol-1;
        }
    }
    return false;
};
