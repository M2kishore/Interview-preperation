https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-height-of-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMinHeight = (node = this.root)=>{
    if(this.root === null){
      return -1;
    }
    //find the min
    if(node.left === null && node.right === null){
      return 0;
    }
    if(node.left === null){
      return this.findMinHeight(node.right) + 1;
    }
    if(node.right === null){
      return this.findMinHeight(node.left) + 1;
    }
    let lheight = this.findMinHeight(node.left);
    let rheight = this.findMinHeight(node.right);
    return Math.min(lheight,rheight) + 1;
  };
  this.findMaxHeight = (node = this.root)=>{
    if(this.root === null){
      return -1;
    }
    //find the max
    if(node.left === null && node.right === null){
      return 0;
    }
    if(node.left === null){
      return this.findMaxHeight(node.right) + 1;
    }
    if(node.right === null){
      return this.findMaxHeight(node.left) + 1;
    }
    let lheight = this.findMaxHeight(node.left);
    let rheight = this.findMaxHeight(node.right);
    return Math.max(lheight,rheight) + 1;
  };
  this.isBalanced = (node = this.root)=>{
    if(node === null){
      return true;
    }
    if(node.left === null && node.right === null){
      return true;
    }
    if(node.left === null){
      return this.findMaxHeight(node.right) <= 0;
    }
    if(node.right === null){
      return this.findMaxHeight(node.left) <= 0;
    }
    let lHeight = this.findMinHeight(node.left);
    let rHeight = this.findMaxHeight(node.right);
    if(Math.abs(lHeight-rHeight) > 1.0){
      return false;
    }
    return this.isBalanced(node.right) && this.isBalanced(node.right);
  }
  // Only change code above this line
}