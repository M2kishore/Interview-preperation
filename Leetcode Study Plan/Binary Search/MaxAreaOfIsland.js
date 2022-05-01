//https://leetcode.com/problems/max-area-of-island/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    function dfs(i,j){
        if(i<0||j<0||i>=grid.length||j>=grid[0].length||grid[i][j] === 0){
            return 0;
        }
        grid[i][j] = 0;
        let a = dfs(i-1,j);
        let b = dfs(i+1,j);
        let c = dfs(i,j+1);
        let d = dfs(i,j-1);
        return 1+a+b+c+d;
        
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let area = dfs(i,j);
            maxArea = area>maxArea?(area):(maxArea);
        }
    }
    return maxArea;
};
