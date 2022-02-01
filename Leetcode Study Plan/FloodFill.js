//https://leetcode.com/problems/flood-fill/submissions/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const visited = new Set()
    const oldColor = image[sr][sc]
    
    const explore = (grid, r, c) => {
        const rowInbound = 0 <= r && r < grid.length
        const colInbound = 0 <= c && c < grid[0].length
        if (!rowInbound || !colInbound) return 

        const key = `${r},${c}`
        if (visited.has(key)) return 
        visited.add(key)

        if (grid[r][c] !== oldColor) return
        
        grid[r][c] = newColor

        explore(grid, r + 1, c)
        explore(grid, r - 1, c)
        explore(grid, r, c + 1)
        explore(grid, r, c - 1)
    }
        
    explore(image, sr, sc)
    return image
    
};
