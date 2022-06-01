// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}

function makeLoop(head, tail, pos) {
  if (pos === 0) return;
  let cur = head;
  for (let j = 1; j < pos; j++) {
    cur = cur.next;
  }
  tail.next = cur;
}

function printList(head) {
  let s = "";
  while (head) {
    s += head.data;
    s += " ";
    head = head.bottom;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let elements = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let head = null,
      temp = null,
      tempB = null,
      pre = null,
      preB = null,
      flag = 1,
      flag1 = 1,
      j = 0;
    for (let i = 0; i < N; i++) {
      let m = arr[i];
      m--;
      let a1 = elements[j];
      j++;
      temp = new Node(a1);
      if (flag == 1) {
        head = temp;
        pre = temp;
        flag = 0;
        flag1 = 1;
      } else {
        pre.next = temp;
        pre = temp;
        flag1 = 1;
      }

      for (let k = 0; k < m; k++) {
        let a = elements[j];
        j++;
        tempB = new Node(a);
        if (flag1 == 1) {
          temp.bottom = tempB;
          preB = tempB;
          flag1 = 0;
        } else {
          preB.bottom = tempB;
          preB = tempB;
        }
      }
    }
    let obj = new Solution();
    let res = obj.flatten(head);
    printList(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
*/
//https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1
class Solution {
    
    merge(Node1,Node2){
        let temp = new Node(-1);
        let head = temp;
        while(Node1 && Node2){
            if(Node1.data < Node2.data){
                temp.bottom = Node1;
                Node1 = Node1.bottom;
            }else{
                temp.bottom = Node2;
                Node2 = Node2.bottom;
            }
            temp = temp.bottom;
        }
        if(Node1 !== null){
            temp.bottom = Node1;
        }else{
            temp.bottom = Node2;
        }
        return head.bottom;
    }
    flatten(head)
    {
        //your code here
        if(head === null || head.next === null){
            return head;
        }
        head.next = this.flatten(head.next);
        head = this.merge(head,head.next);
        return head;
    }
    
}
