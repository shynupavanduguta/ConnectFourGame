// WelcomePage.js
import React from 'react';

const WelcomePage = ({ onStartGame }) => {
    // Inline styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Full viewport height
            backgroundColor: '#4CAF50', // Green background
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        buttonContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 150px)', // 2 columns with 150px width
            gap: '20px',
            marginTop: '20px',
        },
        button: {
            padding: '15px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#fff',
            color: '#4CAF50',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonDisabled: {
            padding: '15px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#ccc',
            color: '#666',
            fontSize: '16px',
            cursor: 'not-allowed',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Connect Four!</h1>
            <h2>Select Game Mode</h2>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={onStartGame}>Two Players</button>
                <button style={styles.buttonDisabled} disabled>Multiplayer 1 (Coming Soon)</button>
                <button style={styles.buttonDisabled} disabled>Multiplayer 2 (Coming Soon)</button>
                <button style={styles.buttonDisabled} disabled>Multiplayer 3 (Coming Soon)</button>
            </div>
        </div>
    );
};

export default WelcomePage;
