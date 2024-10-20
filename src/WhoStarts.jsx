import React, { useState } from "react";

const WhoStarts = ({ onSelectTurn }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = () => {
        if (selectedOption) {
            onSelectTurn(selectedOption);
        } else {
            alert("Please select who starts.");
        }
    };

    // Inline styles for layout and aesthetics
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
            padding: '20px',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            width: '300px',
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            fontSize: '18px',
            cursor: 'pointer',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Select Who Starts</h1>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="turn"
                        value="player1"
                        onChange={() => setSelectedOption("player1")}
                    />
                    Player 1 First
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="turn"
                        value="player2"
                        onChange={() => setSelectedOption("player2")}
                    />
                    Player 2 First
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="turn"
                        value="alternate"
                        onChange={() => setSelectedOption("alternate")}
                    />
                    Alternate Turns
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="turn"
                        value="loserFirst"
                        onChange={() => setSelectedOption("loserFirst")}
                    />
                    Loser First
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        name="turn"
                        value="winnerFirst"
                        onChange={() => setSelectedOption("winnerFirst")}
                    />
                    Winner First
                </label>
                <button 
                    onClick={handleSelect} 
                    style={styles.button} 
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default WhoStarts;
