//https://leetcode.com/problems/number-of-closed-islands/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    function checkValidIsland(i,j){
        if(i<0||j<0||i>=grid.length||j>=grid[0].length){
            return 0
        }
        if(grid[i][j] === 1){
            return 1;
        }
        grid[i][j] = 1;
        let a = checkValidIsland(i-1,j);
        let b = checkValidIsland(i+1,j);
        let c = checkValidIsland(i,j-1);
        let d = checkValidIsland(i,j+1);
        return 1*a*b*c*d;
    }
    
    let islands = 0;
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 0){
                const isValidIsland = checkValidIsland(i,j);
                islands = (isValidIsland === 1)?(islands+1):(islands);
            }
        }
    }
    return islands;
};
