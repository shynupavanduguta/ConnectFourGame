import React from "react";
import player1Img from '../assets/player.png'; // Player 1 image
import player2Img from '../assets/player2.png'; // Player 2 image

const Scoreboard = ({ player1Name, player2Name, player1Score, player2Score, currPlayer }) => {
    return (
        <div style={{ marginRight: '20px', textAlign: 'center' }}>
            <h2>Scoreboard</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={player1Img} alt="Player 1" style={{ width: '50px', height: '50px', border: currPlayer === 'X' ? '3px solid orange' : 'none' }} />
                <h3>{player1Name} (X)</h3>
                <p>Score: {player1Score}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <img src={player2Img} alt="Player 2" style={{ width: '50px', height: '50px', border: currPlayer === 'O' ? '3px solid orange' : 'none' }} />
                <h3>{player2Name} (O)</h3>
                <p>Score: {player2Score}</p>
            </div>
        </div>
    );
};

export default Scoreboard;
