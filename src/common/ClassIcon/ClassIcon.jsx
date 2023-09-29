import React, { useState, useEffect, useContext } from 'react';
import { GameDataContext } from 'Context/GameDataContext';

function ClassIcon({ totalScores, pClass }) {
  const { selectClass } = useContext(GameDataContext);
  const [isSelectableIcon, setSelectableIcon] = useState(true);

  useEffect(() => {
    let requeriments = 2;
    let requerimentsFulfilled = 0;

    for (const [key, value] of Object.entries(totalScores)) {
      for (const [classKey, classValue] of Object.entries(pClass.classRequirements)) {
        if (key === classKey) {
          if (value >= classValue) {
            requerimentsFulfilled++;
          }
        }
      }

      if (requerimentsFulfilled >= requeriments) {
        setSelectableIcon(true);
      } else {
        setSelectableIcon(false);
      }
    }
  }, [totalScores, pClass]);

  return (
    <div className="classContainer">
      <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
      <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={selectClass}>
        <img src={pClass.classIcon} alt={pClass.className} id={pClass.className} style={!isSelectableIcon ? { filter: 'grayscale(100%)' } : {}}></img>
      </label>
      <p>{pClass.className}</p>
    </div>
  );
}

export default ClassIcon;
