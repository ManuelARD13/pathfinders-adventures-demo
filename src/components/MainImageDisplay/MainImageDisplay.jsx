import React, { useContext } from "react";
import { SelectorsContext } from "../../context/SelectorsCtx";

function MainImageDisplay() {

  const { img, isSelectable } = useContext(SelectorsContext)
  
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