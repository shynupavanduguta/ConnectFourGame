import React, { useState } from "react";
import Board from "./components/Board";
import GameSelector from "./components/GameSelection"; // Ensure this is for selecting player names and games
import WelcomePage from "./components/WelcomeScreen"; // Updated name
import WhoStarts from "./WhoStarts";
import './App.css';

const App = () => {
    const [players, setPlayers] = useState(null);
    const [turnSelection, setTurnSelection] = useState(null);
    const [numGames, setNumGames] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const handleGameSetup = (playerNames, games) => {
        setPlayers(playerNames);
        setNumGames(games);
    };

    const handleTurnSelection = (turnOption) => {
        setTurnSelection(turnOption);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    if (!gameStarted) {
        return <WelcomePage onStartGame={startGame} />;
    }

    if (!players) {
        return <GameSelector onStartGame={handleGameSetup} />;
    }

    if (!turnSelection) {
        return <WhoStarts onSelectTurn={handleTurnSelection} />;
    }

    return (
        <Board
            player1Name={players.player1}
            player2Name={players.player2}
            numGames={numGames}
            initialTurn={turnSelection}
        />
    );
};

export default App;
