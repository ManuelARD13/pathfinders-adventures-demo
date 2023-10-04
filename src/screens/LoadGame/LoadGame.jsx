import React, { useContext, useState } from 'react';
import './LoadGame.css';

import StatsList from 'Common/StatsList/StatsList';
import Modal from 'Common/Modal/Modal';
import { GameDataContext } from 'Context/GameDataContext';
import DeleteCharacters from 'Components/DeleteCharacters/DeleteCharacters';

function LoadGame() {
  const { character, savedCharacters, setSavedCharacters, setCharacter, setScreen } = useContext(GameDataContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteMode, setDeleteMode] = useState('');

  const setModalModeOpen = (mode) => {
    setModalOpen(true);
    setDeleteMode(mode);
  };

  const deleteAll = () => {
    localStorage.removeItem('savedCharacters_V1');
    localStorage.setItem('savedCharacters_V1', '[]');
    setSavedCharacters([]);
  };

  const deleteCharacter = () => {
    let loadedCharacters = Array.from(document.getElementsByClassName('selectionBox'));
    let selectedCharacterBox = loadedCharacters.find((loadedCharacter) => loadedCharacter.checked);
    let character = savedCharacters.find((savedcharacter) => savedcharacter.name + savedcharacter.savedTimestamp === selectedCharacterBox.id);
    let newSavedCharacters = savedCharacters.filter((savedcharacter) => savedcharacter.name !== character.name);
    localStorage.setItem('savedCharacters_V1', JSON.stringify(newSavedCharacters));
    setSavedCharacters(newSavedCharacters);
  };

  const selectCharacter = () => {
    let loadedCharacters = Array.from(document.getElementsByClassName('selectionBox'));
    let selectedCharacterBox = loadedCharacters.find((loadedCharacter) => loadedCharacter.checked);
    let character = savedCharacters.find((savedcharacter) => savedcharacter.name + savedcharacter.savedTimestamp === selectedCharacterBox.id);
    setCharacter(character);
  };

  return (
    <>
      <section className="loadingGameScreen">
        <div className="titlesBar">
          <p>Select an Adventurer</p>
          <input type="button" value="Delete All" onClick={() => setModalModeOpen('ALL')} />
          <h2>LOAD GAME</h2>
        </div>
        <div className="loadGameMenu">
          {
            <>
              {savedCharacters.length > 0 &&
                savedCharacters.map((character) => (
                  <>
                    <input type={'radio'} className="selectionBox" name="savedCharacters" id={character.name + character.savedTimestamp} onChange={selectCharacter} />
                    <label htmlFor={character.name + character.savedTimestamp}>
                      <div className="characterContainer">
                        <div className="characterThumbnails">
                          <div className="characterPicture">
                            <img src={character.characterProfileImg} alt={character.playerId + character.name} />
                            <div className="characterPictureSpanded" style={{ backgroundImage: `url("${character.raze.razeBKImg}")` }}>
                              <img src={character.img} alt={character.playerId + character.name} />
                            </div>
                          </div>

                          <div className="characterLogo">
                            <img src={character.cClass.classIcon} alt="" />
                            <div className="characterStatsSpanded">
                              <StatsList characterStats={character.stats} raze={character.raze} />
                            </div>
                          </div>
                        </div>
                        <div className="characterDetails">
                          <div className="characterInfo">
                            <p>
                              {character.gender}&nbsp;{character.raze.razeName}&nbsp;{character.cClass.className}
                            </p>
                            <p>Lv:&nbsp;{character.level}</p>
                            <p>HP:&nbsp;{character.HP}</p>
                            <p>ATK:&nbsp;{character.ATK}</p>
                            <p>DEF:&nbsp;{character.DEF}</p>
                          </div>
                          <div className="userDetails">
                            <p>Player ID:</p>
                            <p>{character.playerId}</p>
                            <p>Date:</p>
                            <p>Time:</p>
                            <p className="dateTime">{character.savedTimestamp}</p>
                          </div>
                          <div className="infoBar">
                            <h4>{character.name}</h4>
                            <div className="deleteButton" onClick={() => setModalModeOpen('CHARACTER')}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                  fillRule="evenodd"
                                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </>
                ))}
              <div className="emptyCharacterContainer"></div>
            </>
          }
        </div>
        <input type="button" className="returnButton returnMainMenu" value="Return" onClick={() => setScreen('MainMenu')} />
        <div className="buttonContainer">
          <input type="button" className="continueButton" value="Continue" id="continueLoadGame" onClick={() => setScreen('CharacterProfile')} disabled={character !== '' ? false : true} />
        </div>
      </section>
      {isModalOpen && (
        <Modal>
          {deleteMode === 'ALL' ? (
            <DeleteCharacters setModalOpen={setModalOpen} handler={deleteAll} message="ALL character" />
          ) : (
            <DeleteCharacters setModalOpen={setModalOpen} handler={deleteCharacter} message="THIS character" />
          )}
        </Modal>
      )}
    </>
  );
}

export default LoadGame;

//Apply changes after implement useReducer format to screen's changes logic.
//Add unic identifier for each character.
