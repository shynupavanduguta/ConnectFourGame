// PlayerSetup.jsx
import React, { useState } from 'react';

export const PlayerSetup = ({ setPlayer1, setPlayer2, nextScreen }) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');

  const handleSubmit = () => {
    setPlayer1({ name: name1, photo: photo1 });
    setPlayer2({ name: name2, photo: photo2 });
    nextScreen();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Player Setup</h1>
      <div>
        <h2>Player 1</h2>
        <input type="text" placeholder="Name" onChange={(e) => setName1(e.target.value)} />
        <input type="text" placeholder="Photo URL" onChange={(e) => setPhoto1(e.target.value)} />
      </div>
      <div>
        <h2>Player 2</h2>
        <input type="text" placeholder="Name" onChange={(e) => setName2(e.target.value)} />
        <input type="text" placeholder="Photo URL" onChange={(e) => setPhoto2(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};
