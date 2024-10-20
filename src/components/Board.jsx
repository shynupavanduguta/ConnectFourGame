import React, { useState } from "react";
import Slot from "./Slot";
import player1Img from '../assets/player.png'; // Player 1 image
import player2Img from '../assets/player2.png'; // Player 2 image

const Board = ({ player1Name, player2Name, numGames }) => {
    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill('')));
    const [currPlayer, setCurrPlayer] = useState('X');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [history, setHistory] = useState([]);

    const checkWin = (row, col, ch) => {
        const directions = [
            { r: 0, c: 1 },  // Horizontal
            { r: 1, c: 0 },  // Vertical
            { r: 1, c: 1 },  // Diagonal /
            { r: 1, c: -1 }, // Diagonal \
        ];

        for (let { r, c } of directions) {
            let count = 1;

            for (let i = 1; i < 4; i++) {
                const newRow = row + r * i;
                const newCol = col + c * i;
                if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || board[newRow][newCol] !== ch) {
                    break;
                }
                count++;
            }

            for (let i = 1; i < 4; i++) {
                const newRow = row - r * i;
                const newCol = col - c * i;
                if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || board[newRow][newCol] !== ch) {
                    break;
                }
                count++;
            }

            if (count >= 4) {
                return true; // Win found
            }
        }
        return false; // No win
    };

    const handleClick = (col) => {
        if (gameOver) return;

        const row = board.slice().reverse().findIndex(r => r[col] === '');
        if (row === -1) return; // Column is full

        const newRow = 5 - row;
        const newHistory = [...history, { row: newRow, col, player: currPlayer }];
        const winner = updateBoard(newRow, col, currPlayer, newHistory);

        if (winner) {
            setGameOver(true);
            if (currPlayer === 'X') {
                setPlayer1Score(prev => prev + 1);
                alert(`${player1Name} wins this round!`);
            } else {
                setPlayer2Score(prev => prev + 1);
                alert(`${player2Name} wins this round!`);
            }
            if (player1Score + player2Score + 1 === numGames) {
                alert(`${currPlayer === 'X' ? player1Name : player2Name} wins the tournament!`);
                resetGame();
            } else {
                setTimeout(resetBoard, 2000);
            }
        } else {
            setCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
        }
    };

    const updateBoard = (row, col, ch, newHistory) => {
        setBoard(prev => {
            const newBoard = prev.map(r => r.slice());
            newBoard[row][col] = ch;
            return newBoard;
        });
        setHistory(newHistory);
        return checkWin(row, col, ch);
    };

    const resetBoard = () => {
        setBoard(Array(6).fill(null).map(() => Array(7).fill('')));
        setCurrPlayer('X');
        setGameOver(false);
        setHistory([]);
    };

    const resetGame = () => {
        resetBoard();
        setPlayer1Score(0); // Reset scores after tournament ends
        setPlayer2Score(0);
    };

    const undoMove = () => {
        if (history.length === 0 || gameOver) return;

        const lastMove = history[history.length - 1];
        setBoard(prev => {
            const newBoard = prev.map(r => r.slice());
            newBoard[lastMove.row][lastMove.col] = '';
            return newBoard;
        });
        setCurrPlayer(lastMove.player);
        setHistory(history.slice(0, -1));
    };

    return (
        <div className="game-layout">
            <div className="board-container">
                <div className="board">
                    {board.map((row, i) =>
                        row.map((ch, j) => (
                            <Slot key={`${i}-${j}`} ch={ch} x={j} onClick={() => handleClick(j)} />
                        ))
                    )}
                </div>
            </div>

            <div className="score-and-controls">
                <div className="player-info">
                    <h2>Player Info</h2>
                    <div className="player">
                        <img src={player1Img} alt="Player 1" className={`player-image ${currPlayer === 'X' ? 'active' : ''}`} />
                        <p><strong>{player1Name}</strong> (X): {player1Score}</p>
                    </div>
                    <div className="player">
                        <img src={player2Img} alt="Player 2" className={`player-image ${currPlayer === 'O' ? 'active' : ''}`} />
                        <p><strong>{player2Name}</strong> (O): {player2Score}</p>
                    </div>
                    <p>Current Player: {currPlayer === 'X' ? player1Name : player2Name}</p>
                </div>

                <button onClick={undoMove}>Undo Last Move</button>
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    );
};

export default Board;
