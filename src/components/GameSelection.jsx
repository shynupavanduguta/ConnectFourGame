import React, { useState } from "react";
import './GameSelector.css'; // Import the CSS file

const GameSelector = ({ onStartGame }) => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [numGames, setNumGames] = useState(1);

    const handleStart = () => {
        if (player1 && player2 && numGames > 0) {
            onStartGame({ player1, player2 }, numGames);
        } else {
            alert("Please fill in all fields and select a valid number of games.");
        }
    };

    return (
        <div className="game-selector"> {/* Add className to the container */}
            <h1>Game Setup</h1>
            <input 
                type="text" 
                placeholder="Player 1 Name" 
                value={player1} 
                onChange={(e) => setPlayer1(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Player 2 Name" 
                value={player2} 
                onChange={(e) => setPlayer2(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Number of Games" 
                value={numGames} 
                onChange={(e) => setNumGames(e.target.value)} 
            />
            <button onClick={handleStart}>Start Game</button>
        </div>
    );
};

export default GameSelector;
