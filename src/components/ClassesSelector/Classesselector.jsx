import React, { useEffect, useState, useContext } from 'react';

import './ClassesSelector.css';

import { SelectorsContext } from '../../context/SelectorsCtx';
import StatsList from '../../common/StatsList/StatsList';
import ClassIcon from '../../common/ClassIcon/ClassIcon';

function ClassesSelector() {
  const { playableClasses, setSelectionStage, gender, raze, cClass, characterStats, dispatch, isSelectable, setSelectable } = useContext(SelectorsContext);

  const [classRequirements, setClassRequirements] = useState(false);

  /*Creating totalScores Object for classRequirements comparisons*/
  const totalScores = {};

  for (const [key, value] of Object.entries(characterStats)) {
    for (const [modKey, modValue] of Object.entries(raze.razeModifiers)) {
      if (modKey === key && modValue !== 0) {
        totalScores[`${key}`] = value + modValue;
      } else if (modKey === key && modValue === 0) {
        totalScores[`${key}`] = value;
      }
    }
  }

  const getAvailableClasses = (raze, gender) => {
    const availableClasses = playableClasses.filter((pClass) => {
      const className = pClass.className;
      const availableClasses = raze.availableClasses[`${gender}`];

      return availableClasses.find((sClass) => className === sClass);
    });

    return availableClasses;
  };

  useEffect(() => {
    if (Object.keys(cClass).length !== 0) {
      const classRequisites = Object.entries(cClass.classRequirements);
      setClassRequirements(classRequisites);
    }
  }, [cClass]);

  useEffect(() => {
    /*Class Requeriments Validation*/
    if (Object.keys(cClass).length !== 0) {
      let requeriments = 2;
      let requerimentsFulfilled = 0;
      for (const [key, value] of Object.entries(totalScores)) {
        for (const [classKey, classValue] of Object.entries(cClass.classRequirements)) {
          if (key === classKey) {
            if (value >= classValue) {
              requerimentsFulfilled++;
            }
          }
        }

        if (requerimentsFulfilled >= requeriments) {
          setSelectable(true);
        } else {
          setSelectable(false);
        }
      }
    }
  }, [cClass, setSelectable]);

  return (
    <>
      <input
        type={'button'}
        value="Return"
        className="returnButton"
        onClick={() => {
          setSelectionStage('razes');
          dispatch({
            type: 'SET_CLASS',
            payload: {},
          });
          setSelectable(true);
        }}
      />

      <div className="displayClassesSelectorsContainer">
        <p>Choose your class</p>
        <p className="divider"></p>

        {isSelectable ? <p className="yesScoreMessage">Great! You've enough Stats Scores.</p> : <p className="noScoreMessage">Sorry. No enough Stats Scores.</p>}

        <div>
          <StatsList />
        </div>

        <p className="divider"></p>

        <form className="formClasses">
          {getAvailableClasses(raze, gender).map((pClass) => (
            <ClassIcon totalScores={totalScores} pClass={pClass} key={pClass.className} />
          ))}
        </form>
      </div>
      <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmClass" disabled={isSelectable === false ? true : false} />
      <div className="displayClassesDescriptionContainer">
        {Object.keys(cClass).length !== 0 ? (
          <>
            <h5>{cClass.className[0].toUpperCase() + cClass.className.substring(1)}</h5>
            <div>
              {!!classRequirements ? (
                <p style={isSelectable ? { color: 'rgb(0, 255, 76)' } : { color: 'red' }}>
                  Stats Requirements: +<span id="requiredStat1">{`${classRequirements[0][0]}: ${classRequirements[0][1]}`}</span> +
                  <span id="requiredStat2">{`${classRequirements[1][0]}: ${classRequirements[1][1]}`}</span>
                </p>
              ) : null}
            </div>
            <p className="classLoreContainer">" {cClass.classLore} "</p>
            <p>Class Skills</p>
            <p className="divider"></p>
            <ul className="classSkillsList">
              {cClass.classSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="noClassContent">
            The dragon roared in triumph as Valeros collapsed into the snow, blood spurting from the terrible wound in his belly. Kyra rushed to his side, praying that she wasn't too late to save his
            life. “I'll hold the beast off!” Seoni cried as she stepped up to the dragon, her staff flaring with defensive fire. Merisiel looked to the hulking dragon, then at the delicate sorcerer,
            and shook her head sadly. The adventure had just barely begun, and judging by this fight alone, they weren't getting paid enough for the job.
          </p>
        )}
      </div>
    </>
  );
}

export default ClassesSelector;
