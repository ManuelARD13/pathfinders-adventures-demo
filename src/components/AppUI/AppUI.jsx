import React, { useContext } from 'react';
import { GameDataContext } from 'Context/GameDataContext';

import SoundPlayer from 'Components/SoundPlayer/SoundPlayer';
import Start from 'Screens/Start/Start.jsx';
import Intro from 'Screens/Intro/Intro';
import MainMenu from 'Screens/MainMenu/MainMenu';
import LoadGame from 'Screens/LoadGame/LoadGame';
import StatsGenerator from 'Screens/StatsGenerator/StatsGenerator';
import Main from 'Screens/Main/Main';
import Acknoledgements from 'Screens/Acknowledgements/Acknowledgements';
import CharacterProfile from 'Screens/CharacterProfile/CharacterProfile';

function AppUI() {

  const { screenState } = useContext(GameDataContext)

  if(screen.orientation.type === "portrait-primary"){
    document.querySelector('body').requestFullscreen();
    try{
      screen.orientation.lock("landscape");
    } catch(err){
      console.log(err)
    }
  }


  /*Rendering*/
  return (
    <div>
      {screenState !== "Start" ?<SoundPlayer /> : null }
      {screenState !== "Start" ?  null : <Start />}
     
      {screenState === "Intro" ? <Intro /> : null}

      {screenState === "MainMenu" ? <MainMenu /> : null}

      {screenState === "LoadGame" ? <LoadGame /> : null}

      {screenState === "StatsGenerator" ? <StatsGenerator /> : null}

      {screenState === "Main" ? <Main /> : null }

      {screenState === "CharacterProfile" ? <CharacterProfile /> : null }

      {screenState === "Acknowledgements" ? <Acknoledgements /> : null }
    </div>
  );
}

export default AppUI;