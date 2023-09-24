import React, { useContext } from "react";


import mainMenuTrack  from "../../audio/mainMenu.mp3"
import  tavernTrack  from "../../audio/tavern.mp3"
import humanTrack from "../../audio/human.mp3"
import elfTrack from "../../audio/elf.mp3"
import orcTrack from "../../audio/orc.mp3"
import dwarfTrack from "../../audio/dwarf.mp3"
import { GameDataContext } from "../../context/GameDataContext";


function SoundPlayer () {

  const { screen, selectionStage, raze } = useContext(GameDataContext)

  const applyRazeBKMusic = () => {
  	if(raze.razeName === "human"){
      return(humanTrack)
    } else if(raze.razeName === "elf"){
      return(elfTrack)
    } else if(raze.razeName === "orc"){
      return(orcTrack)
    }  else if(raze.razeName === "dwarf"){
      return(dwarfTrack)
    }
  }

  return(
    <>
      { 
        screen !== "StatsGenerator" &&
        screen !== "Main" ? <audio src={mainMenuTrack} autoPlay loop /> : null }
      {
       screen === "StatsGenerator" ||
       (screen === "Main" && selectionStage === "razes") ? <audio src={tavernTrack} autoPlay loop /> 
       : null 
      }
      { selectionStage === "classes" && screen !== "Acknoledgements" ? <audio src={applyRazeBKMusic()} autoPlay loop /> : null }  
    </>
  )
}

export default SoundPlayer

//Test issues after apply useReducer format to screen's changes