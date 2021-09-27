//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/breadth-first-search
function bfs(graph, root) {
  var nodesLen = {};
  for(let i = 0;i<graph.length;i++){
    nodesLen[i] = Infinity
  }
  nodesLen[root] = 0;
  let queue = [root];
  let current;
  while(queue.length !== 0){
    current = queue.shift();
    let currentConnections = graph[current];
    let neighbourIndex = [];
    let index = currentConnections.indexOf(1);
    while(index !== -1){
      neighbourIndex.push(index);
      index = currentConnections.indexOf(1,index+1);
    }
    console.log(neighbourIndex)
    for(let j = 0; j<neighbourIndex.length;j++){
      if(nodesLen[neighbourIndex[j]] === Infinity){
        nodesLen[neighbourIndex[j]] = nodesLen[current] + 1;
        queue.push(neighbourIndex[j]);
      }
    }

  }

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));