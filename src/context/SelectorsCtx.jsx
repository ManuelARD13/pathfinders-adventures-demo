import React, { useEffect } from 'react';
import { useState } from 'react';
import gameData from '../gameData/data.json';

const SelectorsContext = React.createContext({});

function SelectorsCtx({ children }) {
  
  const [screen, setScreen] = useState('Start');
  const [playableRazes, setRazes] = useState([])
  const [playableClasses, setClasses] = useState([])

  const [savedCharacters, setSavedCharacters] = useState([]);

  useEffect(() => {
    const razes = gameData[0].razes
    const classes = gameData[1].playableClasses

    setRazes(razes)
    setClasses(classes)
  }, [])

  return (
    <SelectorsContext.Provider
      value={{
        screen,
        setScreen,

        savedCharacters,
        setSavedCharacters,

        playableRazes,
        playableClasses,

      }}
    >
      {children}
    </SelectorsContext.Provider>
  );
}

export { SelectorsContext, SelectorsCtx };
