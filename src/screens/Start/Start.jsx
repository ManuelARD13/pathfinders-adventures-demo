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
    <section className='start-screen'>
      <div className='image-container'>
        <img src={diceGoblin} alt='diceGoblin' />
      </div>
      <div className='start-message-container'>
        <p>
          Click below to test this Demo App. <br />
          Allow sound and fullscreen for a better experience. <br />
          <br /> Thank you and good game!
        </p>
        <p>This app is built on React.js applying Object-Oriented programming concepts, Arrays manipulation, and localStorage on Javascript. CSS3 for styling. Hosted and deployed on Vercel.</p>
        <input type='button' value='START DEMO APP TRIAL' onClick={initializeLocalStorage} />
      </div>
    </section>
  );
}

export default Start;

//Extract localStorage logic from this component. See what others components will be change with.
