//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-an-element-from-a-max-heap
var MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line
  this.remove = () => {
    let removedItem = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let position = 1;
    while (position * 2 < this.heap.length) {
      if (this.heap[position-1] < this.heap[position * 2-1] && this.position < this.heap[position * 2]) {
        if (this.heap[position * 2-1] > this.heap[position * 2]) {
          this.heapifyUp(position * 2-1);
          position = position * 2-1;
        } else {
          this.heapify(position * 2);
          position = position * 2;
        }
      }
      else if (this.heap[position-1] < this.heap[position * 2-1]) {
        this.heapifyUp(position * 2-1);
        position = position * 2-1;
      }
      else if(this.heap[position-1] < this.heap[position*2]){
        this.heapifyUp(position*2);
          position = position * 2;
      }else{
        return removedItem;
      }
    }
    return removedItem;


  }

  // Only change code above this line
};
let mh = new MaxHeap();
mh.insert(7)
mh.insert(2)
mh.insert(3)
mh.insert(4)
mh.insert(8)
mh.insert(6)
mh.insert(7)
console.log(mh.print())
mh.remove();
console.log(mh.print())