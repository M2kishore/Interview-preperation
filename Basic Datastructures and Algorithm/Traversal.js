https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-depth-first-search-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inorder = function() {
    if (this.root === null) return null;
    const nodes = [];
    function traverse(root) {
      if (root === null) return;
      traverse(root.left);   
      nodes.push(root.value); 
      traverse(root.right);  
    }
    traverse(this.root);
    return nodes;
  }
  
  this.preorder = function() {
    if (this.root === null) return null;
    const nodes = [];
    function traverse(root) {
      if (root === null) return;
      nodes.push(root.value); 
      traverse(root.left);    
      traverse(root.right);   
    }
    traverse(this.root);
    return nodes;
  }
  this.postorder = function() {
    if (this.root === null) return null;
    const nodes = [];
    function traverse(root) {
      if (root === null) return;
      traverse(root.left);   
      traverse(root.right);   
      nodes.push(root.value); 
    }
    traverse(this.root);
    return nodes;
  }
  // Only change code above this line
}