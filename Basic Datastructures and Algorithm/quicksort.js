https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

function swap(array,a,b){
  [array[a],array[b]] = [array[b],array[a]]
}
function pivot(arr, left=0, right = arr.length-1){
    let shift = left;
    for(let i=left+1;i<=right;i++){
      if(arr[i]<arr[left]){
        swap(arr,i,++shift);
      }
    }
    swap(arr,left,shift);
    return shift
}
function quickSort(array,left=0,right=array.length-1) {
  // Only change code below this line
  if(left<right){
    let pivoti = pivot(array,left,right);
    quickSort(array,pivoti+1,right);
    quickSort(array,left,pivoti-1)
  }
  console.log(array)
  return array;
  // Only change code above this line
}
quickSort([1,4,7,8,3,2])
