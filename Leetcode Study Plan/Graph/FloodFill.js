//https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    let needToChange = image[sr][sc];
    if (needToChange === newColor) return image;
    function dfs(row,col){
        if(row<0 || col<0 || row >= image.length || col >= image[0].length || image[row][col] !== needToChange){
            return;            
        }
        image[row][col] = newColor;
        dfs(row-1,col);
        dfs(row,col-1);
        dfs(row+1,col);
        dfs(row,col+1);
        
        return image;        
    }
    return dfs(sr,sc);
};
