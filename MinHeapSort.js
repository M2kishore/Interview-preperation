//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/implement-heap-sort-with-a-min-heap
function isSorted(a) {
  for (let i = 0; i < a.length - 1; i++)
    if (a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5) {
  let a = new Array(size);
  for (let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function () {
  // Only change code below this line
  this.heap = [null];

  // Insert
  this.insert = (element) => {
    this.heap.push(element);

    let heap = this.heap;
    function maxHeap(index) {
      let parent = Math.floor(index / 2);
      if (element < heap[parent] && index > 1) {
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        maxHeap(parent);
      }
    }
    maxHeap(this.heap.length - 1);
  }

  // Remove
  this.remove = () => {
    let arr = [...this.heap];
    let max = arr.splice(1, 1);
    this.heap = [null];
    for (let i = 1; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return max[0];
  }

  // Sort
  this.sort = (heap = this.heap) => {
    let arr = [];
    for (let i = 0; i < heap.length; i++) {
      arr.push(this.remove());
    }
    return arr;
  }
  // Only change code above this line
};