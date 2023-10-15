import React, { useContext, useEffect, useRef } from 'react';

import mainMenuTrack from 'Audio/mainMenu.mp3';
import tavernTrack from 'Audio/tavern.mp3';
import humanTrack from 'Audio/human.mp3';
import elfTrack from 'Audio/elf.mp3';
import orcTrack from 'Audio/orc.mp3';
import dwarfTrack from 'Audio/dwarf.mp3';
import { GameDataContext } from 'Context/GameDataContext';

function SoundPlayer() {
  const { screenState, selectionStage, raze, character } = useContext(GameDataContext);

  const applyRazeBKMusic = () => {
    if(!!raze){
      if (raze.razeName === 'human') {
        return humanTrack;
      } else if (raze.razeName === 'elf') {
        return elfTrack;
      } else if (raze.razeName === 'orc') {
        return orcTrack;
      } else if (raze.razeName === 'dwarf') {
        return dwarfTrack;
      }
    } else {
      if (character.raze.razeName === 'human') {
        return humanTrack;
      } else if (character.raze.razeName === 'elf') {
        return elfTrack;
      } else if (character.raze.razeName === 'orc') {
        return orcTrack;
      } else if (character.raze.razeName === 'dwarf') {
        return dwarfTrack;
      }
    }
    
  };

  const currentTrack = useRef();

  useEffect(() => {
    // Adjusting Soundtrack Volume component when its available 
    currentTrack.current.volume = 0.3;
  }, [selectionStage, screenState]);

  return (
    <>
      {
        screenState !== 'StatsGenerator' && screenState !== 'Main' && screenState !== 'CharacterProfile' 
          ? <audio src={mainMenuTrack} autoPlay loop ref={currentTrack} /> 
          : null
      }
      {
        screenState === 'StatsGenerator' || (screenState === 'Main' && selectionStage === 'razes') 
          ? <audio src={tavernTrack} autoPlay loop ref={currentTrack} /> 
          : null
      }
      {
        (selectionStage === 'classes' && screenState !== 'Acknowledgements') || screenState === 'CharacterProfile'
          ? <audio src={applyRazeBKMusic()} autoPlay loop ref={currentTrack} /> 
          : null
      }
    </>
  );
}

export default SoundPlayer;

//Test issues after apply useReducer format to screen's changes
