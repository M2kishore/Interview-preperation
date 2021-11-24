//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-15-lattice-paths
function latticePaths(gridSize) {
  let n = gridSize;
  let result = [];

  // Make n+1 size rows and columns
  for (let i = n; i >= 0; i--) {
    let row = [];
    row[n] = 1;
    result.push(row);
  }
  console.log(result);
  for(let i=n;i>=0;i--){
    for(let j=n-1;j>=0;j--){
      if(i==n){
        result[i][j] = 1;
      }else{
        result[i][j] = result[i+1][j] +result[i][j+1]
      }
    }
  }
  console.log(result)
  return result[0][0];
}

latticePaths(4);