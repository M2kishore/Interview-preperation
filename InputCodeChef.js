process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input = "";
process.stdin.on('data', chunk => input+=chunk);
process.stdin.on('end', ()=>{
    //this is where i am going to write my code]
    console.log(input);
});