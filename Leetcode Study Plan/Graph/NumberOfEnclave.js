//https://leetcode.com/problems/number-of-enclaves/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;
    function visit(i,j){
        if(i<0 || j<0 || i >= numRows || j >= numCols || grid[i][j] !== 1){
            return;
        }
        grid[i][j] = 0;
        visit(i+1,j);
        visit(i,j+1);
        visit(i-1,j);
        visit(i,j-1);
    }
    function verticalBorder(){
        for(let i=0;i<numRows;i++){
            visit(i,0);
            visit(i,numCols-1);
        }
    }
    function horizontalBorder(){
        for(let i=0;i<numCols;i++){
            visit(0,i);
            visit(numRows-1,i);
        }
    }
    function countIslands(){
        let count = 0;
        for(let i=0;i<numRows;i++){
            for(let j=0;j<numCols;j++){
                if(grid[i][j] ===1){
                    count++;
                }
            }
        }
        return count;
    }
    verticalBorder();
    horizontalBorder();
    return countIslands();
};
