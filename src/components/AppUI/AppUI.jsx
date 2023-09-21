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


export default function AppUI() {

  const { screen } = useContext(SelectorsContext)
  console.log(screen)

  /*Rendering*/
  return (
    <>
      {screen !== "Start" ?<SoundPlayer /> : null }
      {screen !== "Start" ?  null : <Start />}
     
      {screen === "Intro" ? <Intro /> : null}

      {screen === "MainMenu" ? <MainMenu /> : null}
    </>
  );
}