//https://leetcode.com/problems/minimum-path-sum
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //initiate constants
    const row = grid.length;
    const column = grid[0].length;
    //
    for(let i=1;i<row;i++){
        grid[i][0] += grid[i-1][0];
    }
    //make [0,1].[0,2] donot have above element so add the previous cell
    for(let i=1;i<column;i++){
        grid[0][i] += grid[0][i-1]
    }
    //take the minimum of top or bottom element depending on the weight
    for(let i=1;i<row;i++){
        for(let j=1; j<column;j++){
            grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1]);
        }
    }
    return grid[row-1][column-1];
    
};