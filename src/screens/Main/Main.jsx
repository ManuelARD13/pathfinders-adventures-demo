import React, { useContext } from "react";
import { SelectorsContext } from "../../context/SelectorsCtx";

import "./Main.css"

// import { RazesSelector } from "../RazesSelector.js/RazesSelectors.jsx";
// import { ClassesSelector } from "../ClassesSelector/ClassesSelector";
import MainImageDisplay from "../../components/MainImageDisplay/MainImageDisplay";
import RazesSelector from "../../components/RazesSelector/RazesSelector";


function Main(){

  const { raze, selectionStage } = useContext(SelectorsContext)
 
  return(
      <section 
        className="displayScreen" 
        style = { selectionStage === "razes" 
          ? { backgroundImage: "url('https://i.imgur.com/svtJbZs.jpg')" }
          : null
          // : { backgroundImage: `url(${raze.razeBKImg})` }
      }>
          <h2>Create Your Character</h2>
            { selectionStage === "razes" 
              ? <RazesSelector />
              : null
              // : <ClassesSelector />
            }

              {/* TODO: Add CharacterProfile screen */}

          <MainImageDisplay />
               
      </section>
    )
}

export default Main