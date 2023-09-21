import React, { useContext } from "react";

import mainMenuTrack  from "../../audio/mainMenu.mp3"
import  tavernTrack  from "../../audio/tavern.mp3"
import humanTrack from "../../audio/human.mp3"
import elfTrack from "../../audio/elf.mp3"
import orcTrack from "../../audio/orc.mp3"
import dwarfTrack from "../../audio/dwarf.mp3"
import { SelectorsContext } from "../../context/SelectorsCtx";


function SoundPlayer () {

  const { screen, selectionStage } = useContext(SelectorsContext)

  return(
    <>
      <audio src={mainMenuTrack} autoPlay loop /> 
    </>
  )
}

export default SoundPlayer

//Test issues after apply useReducer format to screen's changes