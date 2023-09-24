import React, { useContext } from "react";
import { GameDataContext } from "Context/GameDataContext";

import "./CharacterProfile.css"
import StatsList from "Common/StatsList/StatsList";
import MainImageDisplay from "Components/MainImageDisplay/MainImageDisplay";





function CharacterProfile () {
  
  const { setCharacter, name, gender, raze, cClass, img, characterStats, setScreen, savedCharacters } = useContext(GameDataContext)

	/*TODO: Move createNewCharacterObj outside this component to combine both this and loadedCharacterProfile component*/

	/*Completing character data for future storage */

  const createPlayerId = () => "00" + Math.floor(Math.random() * 100)

  const createTimeStamp = () => new Date().toLocaleString()

  const HP = raze.razeModifiers.CON + Math.floor( (characterStats.CON - 10) / 2 ) + cClass.hitPoints
  const DEF = 10 + raze.razeModifiers.DEX + ( Math.floor((characterStats.DEX - 10) / 2) )
  const level = 1

  const calculateWeight = (minWeight, maxWeight) => Math.floor(minWeight + (Math.random() * (maxWeight-minWeight)))
  
  const createCharacterProfileImg = (gender, raze, cClass ) => {
    if(raze.razeName === "human"){
      return (gender === "male" ? cClass.classImages.human.maleProfile :
      cClass.classImages.human.femaleProfile)
    } else if(raze.razeName === "elf"){
      return(gender === "male" ? cClass.classImages.elf.maleProfile :
      cClass.classImages.elf.femaleProfile)
    } else if (raze.razeName === "orc") {
      return(gender === "male" ? cClass.classImages.orc.maleProfile :
      cClass.classImages.orc.femaleProfile)
    } else if (raze.razeName === "dwarf") {
      return(gender === "male" ? cClass.classImages.dwarf.maleProfile : 
      cClass.classImages.dwarf.femaleProfile)
    }
}
      
	const createNewCharacterObj = (name, gender, raze, cClass, img, stats) => ({
		/*Constructor*/
    playerId: createPlayerId(),
    savedTimestamp: createTimeStamp(),
    name: name,
    gender: gender,
    raze: raze,
    cClass: cClass,
    characterProfileImg: createCharacterProfileImg(gender, raze, cClass),
    img: img,
    stats: stats,
    HP: raze.razeModifiers.CON + Math.floor( (stats.CON - 10) / 2 ) + cClass.hitPoints,
    ATK: "1d" + cClass.hitPoints + " + " + (raze.razeModifiers.STR + ( Math.floor((stats.STR - 10) / 2))),
    DEF: 10 + raze.razeModifiers.DEX + ( Math.floor((stats.DEX - 10) / 2) ),
    weight: gender === "female" ? calculateWeight(120, 210) + " Pounds" : calculateWeight(155, 265) + " Pounds",
    // height: this.weight < 168 ? ((Math.random * 10) + 5).toFixed(2) : ((Math.random * 10) + 6).toFixed(2),
		// TODO: Implement height property
    level: 1
  })
	
	const saveCharacter = (character) => {
		/*localStorage*/
    savedCharacters.push(character)
    let parsedSavedCharacters = JSON.stringify(savedCharacters)
    localStorage.setItem("savedCharacters_V1", parsedSavedCharacters)
  }

  const finishCharacterProcess = () => {
    let usersCharacter = createNewCharacterObj(name, gender, raze, cClass, img, characterStats)
    saveCharacter(usersCharacter)
    // setCharacter(usersCharacter)
    setScreen("Acknoledgements")
  }

  return (
  	<section className="characterProfile" style={{backgroundImage: `url(${raze.razeBKImg})`}}>
      <h2>{name}</h2>
      <div className="characterGeneralInfo">
        <p id="selectedCharacterGender">{gender}</p>
        <p id="selectedCharacterRazeTittle">{raze.razeName}</p>
        <p>Lv. {level}</p>
        <p>HP: {HP}</p>
        <p>DEF: {DEF}</p>

          <StatsList />

        <h5>Raze Skills</h5>
        <p className="divider"></p>
        <ul className="razeSkills">
          { raze.razeSkills.map((skill) =>
            <li key={skill}>{skill}</li>
          )}
        </ul>
          {/* <p>Height: {character.height}</p>
          	<p>Weight: {character.weight}</p> */}
      </div>
				 
      <div className="displayImgContainer">
        <MainImageDisplay />
      </div>

      <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => finishCharacterProcess(name, gender, raze, cClass, img)} />

      <div className="characterSkillsInfo">
        <img src={cClass.classIcon} alt="" />
        <h4 id="selectedClassName">{cClass.className}</h4>
        <p className="characterLore">
          {cClass.classLore}
        </p>
        <h5>Class Skills</h5>
        {/* <p className="divider"></p> */}
        <ul className="classSkills">
          {cClass.classSkills.map((skill) =>
            <li key={skill}>{skill}</li>
        )}
        </ul>
      </div>
    </section>
  )
}

export default CharacterProfile 

//Separate Create Character Obj and Save on LocalStorage logic from this component. Re factor it to create a charater display for both new character and loaded character.
//Solve Character Height and Weight values issues