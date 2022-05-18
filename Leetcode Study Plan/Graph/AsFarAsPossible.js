//https://leetcode.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const findLand = ()=>{
        const output = [];
        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c] == 1){
                    output.push([r,c,1]);
                }
            }
        }
        return output;
    }
    const directions = [-1,0,1,0,-1];
    const queue = findLand();
    console.log(queue);
    let max = -1;
    
    while(queue.length){
        const len = queue.length;
        for(let i=0;i<len;i++){
            const [r,c,distance] = queue.shift();
            for(let i=0;i<directions.length-1;i++){
                const x = r+directions[i];
                const y = c+directions[i+1];
                if(x<0 || x>=grid.length || y<0 || y >=grid.length || grid[x][y] !== 0){
                    continue;
                }
                queue.push([x,y,distance+1]);
                max = Math.max(max,distance);
                grid[x][y] = 2;
            }
        }
    }
    return max;
};
