//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/depth-first-search
function isFound(r, i) {
  for(let k = 0; k < r.length; ++k) {
    if(r[k] == i) {
      return true;
    }
  }
  return false;
}

function dfs(graph, root) {
  let r = [];
  let stack = [];
  stack.push(graph[root]);
  r.push(root);
  while(stack.length > 0) {
    for(let i = 0 ; i < graph[root].length; ++i) {
      if(!isFound(r, i) && stack[stack.length - 1][i] == 1) {
        stack.push(graph[i]);
        r.push(i);
        i=0;
      }
    }
    stack.pop()
  }
  return r;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));