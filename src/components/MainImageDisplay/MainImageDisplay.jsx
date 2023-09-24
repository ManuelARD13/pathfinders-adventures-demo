import React, { useContext } from "react";
import { GameDataContext } from "../../context/GameDataContext";

function MainImageDisplay() {

  const { img, isSelectable } = useContext(GameDataContext)
  
  return(
  	<div className="displayImgContainer">
      <img 
        src={!img ? "https://i.imgur.com/aryfPBv.png" : img} 
        alt="Your Character"
        style={isSelectable === false ? {filter: "grayscale(100%)"} : {}}
      />
    </div>
  )
}

export default MainImageDisplay