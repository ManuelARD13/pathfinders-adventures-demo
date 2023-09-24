import React, { useContext } from "react";
import './Start.css';
import { GameDataContext } from "../../context/GameDataContext";
import diceGoblin from '../../img/diceGoblin.png';

function Start() {

  const { setScreen, setSavedCharacters } = useContext(GameDataContext);

  const localStorageCharacters = localStorage.getItem('savedCharacters_V1');

  const initializeLocalStorage = () => {
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
    <section className="startScreen">
      <div className="imageContainer">
        <img src={diceGoblin} alt="diceGoblin" />
      </div>
      <div className="startMessage">
        <p>
          Click below to test this Demo App. <br />
          Allow sound and set fullscreen for a better experience. <br />
          Thank you and good game!
        </p>
        <p>
          This app works with React.js Library and Object-Oriented programming concepts, Arrays manipulation, localStorage, and APIs usage on Javascript. CSS3 for styling and FramerMotion React
          Library for animations. Hosted and deployed on Github Pages.
        </p>
        <input type="button" value="START DEMO APP TRIAL" id="startScreenButton" onClick={initializeLocalStorage} />
      </div>
    </section>
  );
}

export default Start;

//Move localStorage logic to another file. See what others components will be change with.
