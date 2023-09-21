import React, { useContext } from 'react';
import { SelectorsContext } from '../../context/SelectorsCtx';

import './RazesSelector.css';
import StatsList from '../../common/StatsList/StatsList';
import maleIcon from '../../img/male.png';
import femaleIcon from '../../img/female.png';
import papyrus from '../../img/papyrus.png';

function RazesSelector() {
  const { name, dispatch, gender, useSelectGender, playableRazes, raze, useSelectRaze } = useContext(SelectorsContext);

  const getUserTextInput = (e) => {
    let userInput = e.target.value;
    dispatch({
      type: 'SET_NAME',
      payload: userInput,
    });
    //Separate this logic.
    if (name !== '') {
      const razesRadioSelectors = Array.from(document.getElementsByClassName('razesSelectors'));
      razesRadioSelectors.forEach((selector) => {
        selector.disabled = false;
      });
    }
  };

  return (
    <>
      <div className="displayRazesSelectorsContainer">
        <legend>Your Character Name</legend>
        <input
          type={'text'}
          placeholder="Adventurer Name..."
          value={name}
          onChange={getUserTextInput}
          style={{
            backgroundImage: `url(${papyrus})`,
          }}
          required
        />

        <legend>Select Gender</legend>
        <div className="genderButtons">
          <input type={'radio'} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} required />
          <label
            htmlFor="genderMale"
            className="genderLabels"
            id="maleLabel"
            style={{
              backgroundImage: `url(${maleIcon})`,
            }}
          ></label>

          <input type={'radio'} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} required />
          <label
            htmlFor="genderFemale"
            className="genderLabels"
            id="femaleLabel"
            style={{
              backgroundImage: `url(${femaleIcon})`,
            }}
          ></label>
        </div>

        <StatsList />

        <p>Choose your raze</p>
        <form className="formRazes">
          {playableRazes.map((raze) => {
            let url;
            gender === 'female' ? (url = raze.femaleImg) : (url = raze.maleImg);

            return (
              <div className="razeContainer" key={raze.razeName}>
                <input type="radio" name="razes" className="razesSelectors" id={raze.razeName} style={{ display: 'none' }} onChange={useSelectRaze} disabled={name && gender ? false : true} />
                <label className="razesLabels" htmlFor={raze.razeName} id={`${raze.razeName}Label`}>
                  <img src={url} alt={raze.razeName} />
                </label>
                <p>{raze.razeName}</p>
              </div>
            );
          })}
        </form>
      </div>

      <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmSelections" disabled />

      <div className="displayRazesDescriptionContainer">
        {Object.keys(raze).length !== 0 ? (
          <>
            <p className="razeLoreContainer">{raze.razeLore}</p>
            <p>Raze Skills</p>
            <p className="divider"></p>
            <ul className="razeSkillsList">
              {raze.razeSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="noRazeContent">
            Welcome to a world where noble warriors battle mighty dragons and powerful wizards explore long-forgotten tombs. This is a world of fantasy, populated by mysterious elves and savage orcs,
            wise dwarves and wily gnomes. In this game, your character can become a master swordsman who has never lost a duel, or a skilled thief capable of stealing the crown from atop the king's
            head. You can play a pious cleric wielding the power of the gods, or unravel the mysteries of magic as an enigmatic sorcerer. The world is here for you to explore, and your actions will
            have a profound inf luence in shaping its history.
          </p>
        )}
      </div>
    </>
  );
}

export default RazesSelector;

// Review UserInput Character Name step
//Review select gender logic. Miss functioning with the radio selectors checks.
