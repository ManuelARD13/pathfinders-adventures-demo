import React, { useContext } from "react";
import { GameDataContext } from "../../context/GameDataContext";

import "./Main.css"

import MainImageDisplay from "../../components/MainImageDisplay/MainImageDisplay";
import RazesSelector from "../../components/RazesSelector/RazesSelector";
import ClassesSelector from "../../components/ClassesSelector/Classesselector";


function Main(){

  const { raze, selectionStage } = useContext(GameDataContext)
 
  return(
      <section 
        className="displayScreen" 
        style = { selectionStage === "razes" 
          ? { backgroundImage: "url('https://i.imgur.com/svtJbZs.jpg')" }
          : { backgroundImage: `url(${raze.razeBKImg})` }
      }>
          <h2>Create Your Character</h2>
            { selectionStage === "razes" 
              ? <RazesSelector />
              : <ClassesSelector />
            }

              {/* TODO: Add CharacterProfile screen */}

          <MainImageDisplay />
               
      </section>
    )
}

export default Main