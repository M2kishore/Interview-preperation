//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/invert-a-binary-tree



var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
   this.invert = function(node = this.root) {
    if (node) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert(node.right);
      this.invert(node.left);
    }
    return node;
  };
 

  // Only change code above this line
}