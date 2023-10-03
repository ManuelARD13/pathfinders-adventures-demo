import React, { useContext, useEffect, useRef } from 'react';

import mainMenuTrack from 'Audio/mainMenu.mp3';
import tavernTrack from 'Audio/tavern.mp3';
import humanTrack from 'Audio/human.mp3';
import elfTrack from 'Audio/elf.mp3';
import orcTrack from 'Audio/orc.mp3';
import dwarfTrack from 'Audio/dwarf.mp3';
import { GameDataContext } from 'Context/GameDataContext';

function SoundPlayer() {
  const { screen, selectionStage, raze } = useContext(GameDataContext);

  const applyRazeBKMusic = () => {
    if (raze.razeName === 'human') {
      return humanTrack;
    } else if (raze.razeName === 'elf') {
      return elfTrack;
    } else if (raze.razeName === 'orc') {
      return orcTrack;
    } else if (raze.razeName === 'dwarf') {
      return dwarfTrack;
    }
  };

  const currentTrack = useRef();

  useEffect(() => {
    // Adjusting Soundtrack Volume once it's rendered and when selectionStage state changes 
    currentTrack.current.volume = 0.35;
  }, [currentTrack.current, selectionStage]);

  return (
    <>
      {
        screen !== 'StatsGenerator' && screen !== 'Main' && screen !== 'CharacterProfile' 
          ? <audio src={mainMenuTrack} autoPlay loop ref={currentTrack} /> 
          : null
      }
      {
        screen === 'StatsGenerator' || (screen === 'Main' && selectionStage === 'razes') 
          ? <audio src={tavernTrack} autoPlay loop ref={currentTrack} /> 
          : null
      }
      {
        selectionStage === 'classes' && screen !== 'Acknowledgements' 
          ? <audio src={applyRazeBKMusic()} autoPlay loop ref={currentTrack} /> 
          : null
      }
    </>
  );
}

export default SoundPlayer;

//Test issues after apply useReducer format to screen's changes
