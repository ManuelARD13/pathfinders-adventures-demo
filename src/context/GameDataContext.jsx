import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import gameData from 'GameData/data.json';

const GameDataContext = React.createContext({});

function GameDataCtx({ children }) {
  
    // Game Data States
  const [playableRazes, setRazes] = useState([])
  const [playableClasses, setClasses] = useState([])
  const [savedCharacters, setSavedCharacters] = useState([]);

  // Fetching Game Data
  useEffect(() => {
    const razes = gameData[0].razes
    const classes = gameData[1].playableClasses

    setRazes(razes)
    setClasses(classes)
  }, [])

  // Display States
  const [ screen, setScreen ] = useState("Start");
  const [selectionStage, setSelectionStage] = useState("razes")

  // In-game character States
  const adventurerReducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return {
          ...state,
          name: action.payload
        }
      case "SET_GENDER":
        return {
          ...state,
          gender: action.payload
        }
      case "SET_RAZE":
        return {
          ...state,
          raze: action.payload
        }
      case "SET_CLASS":
        return {
          ...state,
          cClass: action.payload
        }
      case "SET_IMG":
        return {
          ...state,
          img: action.payload
        }
      default:
        throw new Error("Action is not recognize")

    }
  }

  const [{ name, gender, raze, cClass, img }, dispatch] = useReducer(adventurerReducer, {
    name: "",
    gender: "male",
    raze: "",
    cClass: {},
    img: "https://i.imgur.com/aryfPBv.png"
  })

  useEffect(() => {
    /*Character Images Display */
    if(cClass)
    {
      if (Object.keys(cClass).length === 0) {
        dispatch({
          type: "SET_IMG",
          payload: gender === "male" ? raze.maleImg : raze.femaleImg
        })
      } else {
        if (raze.razeName ==="human") {
          dispatch({
            type: "SET_IMG",
            payload: gender === "male"? cClass.classImages.human.male
              : cClass.classImages.human.female
          })
        } else if (raze.razeName === "elf") {
          dispatch({
            type: "SET_IMG",
            payload: gender === "male" 
              ? cClass.classImages.elf.male 
              : cClass.classImages.elf.female
          })
        } else if (raze.razeName === "orc") {
          dispatch({
            type: "SET_IMG",
            payload: gender === "male" 
              ? cClass.classImages.orc.male  
              : cClass.classImages.orc.female
          })
        } else if (raze.razeName === "dwarf") {
          dispatch({
            type: "SET_IMG",
            payload: gender === "male" 
              ? cClass.classImages.dwarf.male 
              : cClass.classImages.dwarf.female
          })
        }
      } 
    } else {
      dispatch({
        type: "SET_IMG",
        payload: gender === "male" ? raze.maleImg : raze.femaleImg
      })
    }

  }, [gender, raze, cClass])

  const [characterStats, setStats] = useState({})

  const selectGender = () => {
    // Review logic. Miss functioning with the radio selectors checks.
    const genderFemaleSelector = document.getElementById("genderFemale")
    const genderMaleSelector = document.getElementById("genderMale")

    const applyMaleGender = (gender) => {
      dispatch({
        type: "SET_GENDER",
        payload: gender
      })
      genderMaleSelector.checked = true
    }

    genderFemaleSelector.checked
      ? dispatch({
        type: "SET_GENDER",
        payload: "female"
      })
      : applyMaleGender("male")
  }

  const selectRaze = (e) => {

    dispatch({
      type: "SET_RAZE",
      payload: playableRazes.find(
        (pRaze) => pRaze.razeName === e.target.id
      )
    }
    )
    // Separate this logic

      const comfirmButton = document.getElementById("comfirmSelections")
      comfirmButton.disabled = false
      comfirmButton.addEventListener("click", () => setSelectionStage("classes"))
    
  }

  const selectClass = (e) => {
    dispatch({
      type: "SET_CLASS",
      payload: playableClasses.find(
        (pClass) => { if(pClass.className === e.target.id){
          return pClass
        }
        }
      )
    })
  }

  const [isSelectable, setSelectable] = useState("")
  const [character, setCharacter] = useState({})

  const createCharacterProfileImg = (gender, raze, cClass) => {
    if (raze.razeName === 'human') {
      return gender === 'male' ? cClass.classImages.human.maleProfile : cClass.classImages.human.femaleProfile;
    } else if (raze.razeName === 'elf') {
      return gender === 'male' ? cClass.classImages.elf.maleProfile : cClass.classImages.elf.femaleProfile;
    } else if (raze.razeName === 'orc') {
      return gender === 'male' ? cClass.classImages.orc.maleProfile : cClass.classImages.orc.femaleProfile;
    } else if (raze.razeName === 'dwarf') {
      return gender === 'male' ? cClass.classImages.dwarf.maleProfile : cClass.classImages.dwarf.femaleProfile;
    }
  };

  const calculateWeight = (minWeight, maxWeight) => Math.floor(minWeight + Math.random() * (maxWeight - minWeight));

  const createNewCharacterObj = (name, gender, raze, cClass, img, stats, level) => ({
    /*Constructor*/
    playerId: '00' + Math.floor(Math.random() * 100),
    savedTimestamp: new Date().toLocaleString(),
    name: name,
    gender: gender,
    raze: raze,
    cClass: cClass,
    characterProfileImg: createCharacterProfileImg(gender, raze, cClass),
    img: img,
    stats: stats,
    level: level,
    HP: raze.razeModifiers.CON + Math.floor((stats.CON - 10) / 2) + cClass.hitPoints,
    ATK: '1d' + cClass.hitPoints + ' + ' + (raze.razeModifiers.STR + Math.floor((stats.STR - 10) / 2)),
    DEF: 10 + raze.razeModifiers.DEX + Math.floor((stats.DEX - 10) / 2),
    weight: gender === 'female' ? calculateWeight(120, 210) + ' Pounds' : calculateWeight(155, 265) + ' Pounds',
    // height: this.weight < 168 ? ((Math.random * 10) + 5).toFixed(2) : ((Math.random * 10) + 6).toFixed(2),
    // TODO: Implement height property
  });

  const saveCharacter = (character) => {
    /*localStorage*/
    let parsedSavedCharacters = JSON.stringify([...savedCharacters, character]);
    localStorage.setItem('savedCharacters_V1', parsedSavedCharacters);
  };

  const finishCharacterProcess = () => {
    let usersCharacter = createNewCharacterObj(name, gender, raze, cClass, img, characterStats, 1);
    saveCharacter(usersCharacter);
    setCharacter(usersCharacter)
    setScreen("CharacterProfile")
  };

  return (
    <GameDataContext.Provider
      value={{
        screen,
        setScreen,
        selectionStage,
        setSelectionStage,

        savedCharacters,
        setSavedCharacters,

        playableRazes,
        playableClasses,

        dispatch,

        characterStats,
        setStats,

        name,
        img,
        raze,
        gender,
        raze,
        cClass,

        isSelectable,
        setSelectable,

        selectGender,
        selectRaze,
        selectClass,

        character,
        setCharacter,

        finishCharacterProcess,

      }}
    >
      {children}
    </GameDataContext.Provider>
  );
}

export { GameDataContext, GameDataCtx };
