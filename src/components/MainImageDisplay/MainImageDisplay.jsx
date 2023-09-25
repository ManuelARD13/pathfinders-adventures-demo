import React, { useContext } from "react";
import { GameDataContext } from "Context/GameDataContext";

function MainImageDisplay() {

  const { img, isSelectable, character } = useContext(GameDataContext)

  const setImage = () => {
    console.log("hey!")
    if(!img){
      console.log("!img")
      if(!character){
        console.log("!img")
        return "https://i.imgur.com/aryfPBv.png"
      } else {
        console.log("character.img")
        return character.img
      }
    } else {
      console.log("img")
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