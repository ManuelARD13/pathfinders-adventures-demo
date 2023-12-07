import React, { useContext } from 'react';
import './Start.css';
import { GameDataContext } from 'Context/GameDataContext';
import diceGoblin from 'Img/diceGoblin.png';

function Start() {
  const { setScreen, setSavedCharacters } = useContext(GameDataContext);

  const initializeLocalStorage = () => {
    const localStorageCharacters = localStorage.getItem('savedCharacters_V1');

    if (!localStorageCharacters) {
      localStorage.setItem('savedCharacters_V1', '[]');
      setSavedCharacters([]);
    } else {
      let savedCharacters = JSON.parse(localStorageCharacters);
      setSavedCharacters(savedCharacters);
    }

    setScreen('Intro');
  };

  return (
    <section className="start-screen container">
      <div className="start-screen__image">
        <img src={diceGoblin} alt="diceGoblin" />
      </div>
      <div className="start-screen__text">
        <p>Click below to test this Demo App.</p>
        <p>Allow sound and fullscreen for a better experience.</p>
        <p className='start-screen__special-message'>
          Thank You and Good Game!
        </p>
        <button className="button" onClick={initializeLocalStorage}>
          Start Trial
        </button>
      </div>
      <p className='start-screen__footer'>Powered by React.js</p>
    </section>
  );
}

export default Start;

//Extract localStorage logic from this component. See what others components will be change with.
