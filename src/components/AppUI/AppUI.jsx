import React, { useContext } from 'react';
import { GameDataContext } from 'Context/GameDataContext';

import MainMenu from 'Screens/MainMenu/MainMenu';
// import { CharacterProfile } from '../CharacterProfile/CharacterProfile';
// import { Acknoledgements } from '../Acknoledgements/Acknoledgements';
// import { LoadGame } from '../LoadGame/LoadGame';
// import { LoadedCharacterProfile } from '../LoadedCharacterProfile/LoadedCharacterProfile';
import SoundPlayer from 'Components/SoundPlayer/SoundPlayer';
import Intro from 'Screens/Intro/Intro';
import Start from 'Screens/Start/Start.jsx';
import StatsGenerator from 'Screens/StatsGenerator/StatsGenerator';
import Main from 'Screens/Main/Main';


export default function AppUI() {

  const { screen } = useContext(GameDataContext)

  /*Rendering*/
  return (
    <>
      {screen !== "Start" ?<SoundPlayer /> : null }
      {screen !== "Start" ?  null : <Start />}
     
      {screen === "Intro" ? <Intro /> : null}

      {screen === "MainMenu" ? <MainMenu /> : null}

      {screen === "StatsGenerator" ? <StatsGenerator /> : null} 
      {screen === "Main" ? <Main /> : null }
    </>
  );
}