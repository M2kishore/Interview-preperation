//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for(let i=1;i<n;i++){
   for(let j=i;j<n;j++){
     let c = n-i-j;
     if((c*c) === (i*i)+(j*j)){
       return i * j * c;
     }
   }
 }

 return 0;
}

specialPythagoreanTriplet(1000);
