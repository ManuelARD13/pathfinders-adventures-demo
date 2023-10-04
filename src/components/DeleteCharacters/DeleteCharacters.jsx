import { GameDataContext } from 'Context/GameDataContext';
import React, { useContext } from 'react';

import './DeleteCharacters.css';

function DeleteCharacters({ setModalOpen, handler, message }) {
  const { character } = useContext(GameDataContext);
  return (
    <div className="deleteCharactersModal">
      <h1>You sure you want to delete {message} ?</h1>
      <p className="divider"></p>
      {message === 'THIS character' ? (
        <>
          <div className="confirmCharacterModalBody">
            <div>
              <p>{character.name}</p>
              <p>
                {character.raze.razeName.toLocaleUpperCase().charAt(0) + character.raze.razeName.slice(1)}
                {`  `}
                {character.gender.toLocaleUpperCase().charAt(0) + character.gender.slice(1)}
              </p>
              <p>{character.cClass.className}</p>
            </div>
            <div>
              <img src={character.cClass.classIcon} />
            </div>
          </div>
        </>
      ) : null}
      <div className='deleteModalButtons'>
        <input type="button" value="Cancel" onClick={() => setModalOpen(false)} />
        <input type="button" value="Continue" 
          onClick={() => {
            handler();
            setModalOpen(false);
          }} 
        />
      </div>
    </div>
  );
}

export default DeleteCharacters;
