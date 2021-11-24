//https://www.codechef.com/submit/FLOW001
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input = "";
process.stdin.on('data', chunk => input+=chunk);
process.stdin.on('end', ()=>{
    //this is where i am going to write my code
    input = input.trim().split('\n')
    let i = parseInt(input[0]);
    input.shift();
    let nums = input.map((item)=>{
        return item.split(' ').map((item)=>{
            return parseInt(item)
        })
        
    })
    nums.map((nums)=>{
        console.log(nums[0]+nums[1])
    })
});