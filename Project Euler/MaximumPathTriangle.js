//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i
function maximumPathSumI(triangle,x=0,y=0) {
  for(let i=triangle.length-2;i>=0;i--){
    for(let j=0;j<=i;j++){
      if(triangle[i+1][j] > triangle[i+1][j+1]){
        triangle[i][j] += triangle[i+1][j];
      }else{
        triangle[i][j] += triangle[i+1][j+1];
      }
    }
  }
  return triangle[0][0];
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

console.log(maximumPathSumI(testTriangle));
