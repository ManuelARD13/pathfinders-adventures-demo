import React, { useContext } from "react";
import { GameDataContext } from "Context/GameDataContext";

import "./CharacterProfile.css"
import StatsList from "Common/StatsList/StatsList";
import MainImageDisplay from "Components/MainImageDisplay/MainImageDisplay";

function CharacterProfile () {
  
  const { character, setScreen } = useContext(GameDataContext)

  return (
  	<section className="characterProfile" style={{backgroundImage: `url(${character.raze.razeBKImg})`}}>
      <h2>{character.name}</h2>
      <div className="characterGeneralInfo">
        <p id="selectedCharacterGender">{character.gender}</p>
        <p id="selectedCharacterRazeTittle">{character.raze.razeName}</p>
        <p>Lv. {character.level}</p>
        <p>HP: {character.HP}</p>
        <p>DEF: {character.DEF}</p>

          <StatsList characterStats={character.stats} raze={character.raze} />

        <h5>Raze Skills</h5>
        <p className="divider"></p>
        <ul className="razeSkills">
          { character.raze.razeSkills.map((skill) =>
            <li key={skill}>{skill}</li>
          )}
        </ul>
          {/* <p>Height: {character.height}</p>
          	<p>Weight: {character.weight}</p> */}
      </div>
				 
      <div className="displayImgContainer">
        <MainImageDisplay />
      </div>

      <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => setScreen("Acknowledgements")} />

      <div className="characterSkillsInfo">
        <img src={character.cClass.classIcon} alt="" />
        <h4 id="selectedClassName">{character.cClass.className}</h4>
        <p className="characterLore">
          {character.cClass.classLore}
        </p>
        <h5>Class Skills</h5>
        {/* <p className="divider"></p> */}
        <ul className="classSkills">
          {character.cClass.classSkills.map((skill) =>
            <li key={skill}>{skill}</li>
        )}
        </ul>
      </div>
    </section>
  )
}

export default CharacterProfile 

//Solve Character Height and Weight values issues