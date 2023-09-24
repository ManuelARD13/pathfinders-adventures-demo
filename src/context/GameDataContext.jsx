import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import gameData from '../gameData/data.json';

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

  const useSelectGender = () => {
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

  const useSelectRaze = (e) => {
    dispatch({
      type: "SET_RAZE",
      payload: playableRazes.find(
        (pRaze) => pRaze.razeName === e.target.id
      )
    }
    )
    // Separate this logic
    if (!!name) {
      const comfirmButton = document.getElementById("comfirmSelections")
      comfirmButton.disabled = false
      comfirmButton.addEventListener("click", () => setSelectionStage("classes"))
    }
  }

  const useSelectClass = (e) => {
    dispatch({
      type: "SET_CLASS",
      payload: playableClasses.find(
        (pClass) => pClass.className === e.target.id
      )
    })
    // Separate this logic
     const comfirmButton = document.getElementById("comfirmClass")

     if (isSelectable === true) {
       comfirmButton.disabled = false
       comfirmButton.addEventListener("click", () => setScreen("CharacterProfile"))
     }
  }

  const [isSelectable, setSelectable] = useState("")

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

        useSelectGender,
        useSelectRaze,
        useSelectClass

      }}
    >
      {children}
    </GameDataContext.Provider>
  );
}

export { GameDataContext, GameDataCtx };
