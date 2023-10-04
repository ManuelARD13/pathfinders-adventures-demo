import React, { useContext } from "react";
import { GameDataContext } from "Context/GameDataContext";

function MainImageDisplay() {

  const { img, isSelectable, character } = useContext(GameDataContext)

  const setImage = () => {
    console.log(character)
      if(Object.keys(character).length === 0) {
        console.log("wutt")
        return img
      } else {
        return character.img
      }
  }
  
  return(
  	<div className="displayImgContainer">
      <img 
        src={setImage()} 
        alt="Your Character"
        style={isSelectable === false ? {filter: "grayscale(100%)"} : {}}
      />
    </div>
  )
}

export default MainImageDisplay