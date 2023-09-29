import React, { useContext } from "react";
import { GameDataContext } from "Context/GameDataContext";

function MainImageDisplay() {

  const { img, isSelectable, character } = useContext(GameDataContext)

  const setImage = () => {
    if(!img){
      if(!character){
        return "https://i.imgur.com/aryfPBv.png"
      } else {
        return character.img
      }
    } else {
      return img
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