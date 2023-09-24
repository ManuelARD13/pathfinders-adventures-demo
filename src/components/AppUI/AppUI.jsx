import React, { useContext } from 'react';
import { GameDataContext } from 'Context/GameDataContext';

// import { LoadedCharacterProfile } from '../LoadedCharacterProfile/LoadedCharacterProfile';
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

  const { screen } = useContext(GameDataContext)

  /*Rendering*/
  return (
    <>
      {screen !== "Start" ?<SoundPlayer /> : null }
      {screen !== "Start" ?  null : <Start />}
     
      {screen === "Intro" ? <Intro /> : null}

      {screen === "MainMenu" ? <MainMenu /> : null}

      {screen === "LoadGame" ? <LoadGame /> : null}

      {screen === "StatsGenerator" ? <StatsGenerator /> : null}

      {screen === "Main" ? <Main /> : null }

      {screen === "CharacterProfile" ? <CharacterProfile /> : null }

      {screen === "Acknoledgements" ? <Acknoledgements /> : null }
    </>
  );
}

export default AppUI;