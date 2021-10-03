//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap

var MaxHeap = function() {
  // Only change code below this line
  this.arr = [];
  this.insert = (item)=>{
    let itemPosition = this.arr.length;
    this.arr.push(item);
    let parent = Math.floor((itemPosition-1)/2)
    while(item>this.arr[parent] && parent >= 0){
      let temp = this.arr[itemPosition];
      this.arr[itemPosition] = this.arr[parent];
      this.arr[parent] = temp;
      itemPosition = parent;
      parent = Math.floor((itemPosition-1)/2);
    }
  }
  this.print = ()=>{
    return this.arr;
  }
    
  // Only change code above this line
};
let mh = new MaxHeap();
mh.insert(1);
mh.insert(2);
mh.insert(1);
mh.insert(9)
console.log(mh.print());
