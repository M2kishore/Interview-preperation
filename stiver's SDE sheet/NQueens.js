//https://leetcode.com/problems/n-queens/submissions/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solutions = [];
    let cols = new Set();
    let posDiag = new Set();
    let negDiag = new Set();
    
    let board = Array.from({ length: n }, () => new Array(n).fill('.'));
    
    function backtrack(row){
        if(row === n){
            solutions.push(board.map(a=>a.join('')));
            return;
        }
        for(let col =0;col<n;col++){
            if(cols.has(col) || posDiag.has(row+col) || negDiag.has(row-col)){
                continue;
            }
            cols.add(col);
            posDiag.add(col+row);
            negDiag.add(row-col);
            board[row][col] = 'Q';
            
            backtrack(row+1);
            
            cols.delete(col);
            posDiag.delete(col+row);
            negDiag.delete(row-col);
            board[row][col] = '.';
        }
    }
    backtrack(0);
    return solutions;
};
