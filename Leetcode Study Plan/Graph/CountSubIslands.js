//https://leetcode.com/problems/count-sub-islands/submissions/
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const m = grid1.length;
    const n = grid1[0].length;
    const movements = [-1, 0, 1, 0, -1];
    
    let count = 0;
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid2[i][j] === 1) {
                if (isSub(i, j, true)) ++count;
            }
        }
    }
    
    return count;
   
    function withinBound(row, col) {
        return row >= 0 && col >= 0 && row < m && col < n;
    }
    
    function isSub(row, col, check) {
        if (grid1[row][col] === 0)
            return false;       
        grid2[row][col] = 0;

        for (let i = 0; i < movements.length - 1; ++i) {
            const neiRow = row + movements[i];
            const neiCol = col + movements[i + 1];

            if (withinBound(neiRow, neiCol) && grid2[neiRow][neiCol] === 1) {
                check &= isSub(neiRow, neiCol, check);
            }
        }

        return check;
    }
};
