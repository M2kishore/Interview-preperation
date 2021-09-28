https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-leaf-node-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.remove = (item) => {
    const removeItem = (item,node = this.root)=>{
      if(node === null){
        return null;
      }
      if(node.value === item){
        if(node.right === null && node.right === null){
          return null;
        }
      }else if(node.value < item){
        node.right = removeItem(item,node.right);
        return node;
      }else{
        node.left = removeItem(item, node.left);
        return node;
      }

    }
     this.root = removeItem(item)
     return this.root;
  }
}