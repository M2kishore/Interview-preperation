https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = (item)=>{
    collection.push(item);
  }
  this.pop = ()=>{
    return collection.pop();
  }
  this.peek = ()=>{
    return collection[collection.length-1];
  }
  this.isEmpty = ()=>{
    return collection.length === 0? true:false;
  }
  this.clear = ()=>{
    collection = [];
  }
  // Only change code below this line

  // Only change code above this line
}