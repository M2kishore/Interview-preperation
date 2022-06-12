//https://leetcode.com/problems/sudoku-solver/submissions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let solve = (board)=>{
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j] === '.'){
                    for(let num =1;num<=9;num++){
                        if(isValid(board, i, j, num.toString())){
                            board[i][j] = num.toString();
                            if(solve(board) === true){
                                return true;
                            }else{
                                board[i][j] = ".";
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board);
};
let isValid = (board,row,col,numChar)=>{
    for(let i=0;i<board.length;i++){
        if(board[row][i] === numChar) return false;
        if(board[i][col] === numChar) return false;
        if(board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + Math.floor(i%3)] === numChar) return false;
    }
    return true;
}
