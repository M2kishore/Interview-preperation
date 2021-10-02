//https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors
//odd factors -> open && even factors -> closed
//square of a number will show the number opened
//perfect square numbers will have the open doors.
function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let i = 1;
  let ii = i*i;
  while(ii <= numDoors){
    doors.push(ii);
    i++;
    ii = i*i;
  }
  return doors;
}
console.log(getFinalOpenedDoors(100))