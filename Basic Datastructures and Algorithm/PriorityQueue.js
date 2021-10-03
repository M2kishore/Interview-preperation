https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class


function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = (newItem)=>{
    if(this.isEmpty()){
      return this.collection.push(newItem);
    }else{
      this.collection = this.collection.reverse();
      let found_index = this.collection.findIndex((item)=>{
        return newItem[1] >= item[1];
      });
      if(found_index === -1){
        this.collection.push(newItem);
      }else{
        this.collection.splice(found_index,0,newItem)
      }
    };
    this.collection = this.collection.reverse();
  }
  this.front = ()=>{
    return this.collection[0][0];
  }
  this.dequeue = ()=>{
    return this.collection.shift()[0];
  }
  this.size = ()=>{
    return this.collection.length;
  }
  this.isEmpty = ()=>{
    return this.collection.length === 0;
  }

  // Only change code above this line
}