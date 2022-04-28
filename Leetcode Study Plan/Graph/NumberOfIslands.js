//https://leetcode.com/problems/number-of-islands/submissions/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var dfs = function(grid,i,j){
    grid[i][j] = "0";
    if(grid[i][j-1] === "1") dfs(grid,i,j-1)
    if(grid[i-1]?.[j] === "1") dfs(grid,i-1,j)
    if(grid[i][j+1] === "1") dfs(grid,i,j+1)
    if(grid[i+1]?.[j] === "1") dfs(grid,i+1,j)
}
var numIslands = function(grid) {
    let island = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=== "1"){
                island++;
                dfs(grid,i,j);
            }
        }
    }
    return island;
};
