import React, { useContext } from 'react';
import { SelectorsContext } from '../../context/SelectorsCtx';

// import { DisplayScreen } from '../DisplayScreen/DisplayScreen';
import MainMenu from '../../screens/MainMenu/MainMenu';
// import { DiceRoll } from '../DiceRoll/DiceRoll';
// import { CharacterProfile } from '../CharacterProfile/CharacterProfile';
// import { Acknoledgements } from '../Acknoledgements/Acknoledgements';
// import { LoadGame } from '../LoadGame/LoadGame';
// import { LoadedCharacterProfile } from '../LoadedCharacterProfile/LoadedCharacterProfile';
import SoundPlayer from '../SoundPlayer/SoundPlayer';
import Intro from '../../screens/Intro/Intro';
import Start from '../../screens/Start/Start.jsx';
import StatsGenerator from '../../screens/StatsGenerator/StatsGenerator';
import Main from '../../screens/Main/Main';


export default function AppUI() {

  const { screen } = useContext(SelectorsContext)

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