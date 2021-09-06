https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.dequeue = ()=>{
    return collection.shift();
  }
  this.enqueue = (item)=>{
    collection.push(item)
  }
  this.front = ()=>{
    return collection[0];
  }
  this.size = ()=>{
    return collection.length;
  }
  this.isEmpty = ()=>{
    return collection.length === 0? true: false;
  }

  // Only change code above this line
}