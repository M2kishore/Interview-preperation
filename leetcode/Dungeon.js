//https://leetcode.com/problems/dungeon-game/
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
   let r = dungeon.length;
    let c = dungeon[0].length;
    
    //create dp table
    
    let dp = new Array(r);
    for(let i = 0; i < r; i++) 
        dp[i] = new Array(c).fill(undefined)
    
    return iter(0,0) 
    function iter(row, col){
        
        //base case: when the prince reached his princess if he has life? 1 : 1-dungeon[r][c]
        if(row == r - 1 && col == c - 1){
            return (dungeon[row][col] > 0 ? 1 : 1 - dungeon[row][col])
        }
        if(row >= r || col >= c) 
            return Infinity;
        
        //get the memorized value
        if(dp[row][col] != undefined)
            return dp[row][col]
        
        //take tha minimum path to right or down
        
        let takenPath = Math.min(
            iter(row + 1, col),
            iter(row, col + 1))
        //if the life is positive we make it one as the bottom up topdown anomoly
        dp[row][col] = ((dungeon[row][col] - takenPath >= 0 ) ? 1 : -(dungeon[row][col] - takenPath));
        console.log(dp)
        return dp[row][col];
    }
};