import React from 'react';
import { useState } from 'react';

const SelectorsContext = React.createContext({});

function SelectorsCtx({ children }) {
  
  const [screen, setScreen] = useState('Start');

  const [savedCharacters, setSavedCharacters] = useState([]);

  return (
    <SelectorsContext.Provider
      value={{
        screen,
        setScreen,

        savedCharacters,
        setSavedCharacters,

        playableRazes,
        playableClasses
      }}
    >
      {children}
    </SelectorsContext.Provider>
  );
}

export { SelectorsContext, SelectorsCtx };
