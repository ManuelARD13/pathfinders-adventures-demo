import React, { useState, useContext, useReducer } from 'react';
import './StatsGenerator.css';
import { GameDataContext } from 'Context/GameDataContext';
import Modal from 'Common/Modal/Modal';

function StatsGenerator() {
  const { setStats, setScreen } = useContext(GameDataContext);

  const [isDiceRolled, setDiceRolled] = useState(false);
  const [reRollsMessage, setRollsMessage] = useState('You will have 3 chances to re-roll one stat of your choice if you want to.');

  const [isStatsInfoOpen, setStatsInfoOpen] = useState(false);

  const reRollsChances = 3;
  const [reRolledCount, setReRolledCount] = useState(reRollsChances - 1);

  const statCalculator = () => Math.floor(Math.random() * 12) + 7;

  const statsReducer = (stats, action) => {
    switch (action.type) {
      case 'SET_ALL':
        return {
          ...stats,
          CON: statCalculator(),
          STR: statCalculator(),
          DEX: statCalculator(),
          INT: statCalculator(),
          WIS: statCalculator(),
          CHA: statCalculator(),
        };
      case 'SET_CON':
        return {
          ...stats,
          CON: action.payload,
        };
      case 'SET_STR':
        return {
          ...stats,
          STR: action.payload,
        };
      case 'SET_DEX':
        return {
          ...stats,
          DEX: action.payload,
        };
      case 'SET_WIS':
        return {
          ...stats,
          WIS: action.payload,
        };
      case 'SET_INT':
        return {
          ...stats,
          INT: action.payload,
        };
      case 'SET_CHA':
        return {
          ...stats,
          CHA: action.payload,
        };
    }
  };

  const [stats = { CON: 0, STR: 0, DEX: 0, WIS: 0, INT: 0, CHA: 0 }, dispatch] = useReducer((stats, action) => statsReducer(stats, action));

  const generateStats = () => {
    dispatch({
      type: 'SET_ALL',
    });

    setDiceRolled(true);
  };

  const reRollStatDice = (e) => {
    /*Re-calculate diceRolls values */
    let stat = e.target.id;

    if (stat === 'CON') {
      dispatch({
        type: 'SET_CON',
        payload: statCalculator(),
      });
    } else if (stat === 'STR') {
      dispatch({
        type: 'SET_STR',
        payload: statCalculator(),
      });
    } else if (stat === 'DEX') {
      dispatch({
        type: 'SET_DEX',
        payload: statCalculator(),
      });
    } else if (stat === 'INT') {
      dispatch({
        type: 'SET_INT',
        payload: statCalculator(),
      });
    } else if (stat === 'WIS') {
      dispatch({
        type: 'SET_WIS',
        payload: statCalculator(),
      });
    } else if (stat === 'CHA') {
      dispatch({
        type: 'SET_CHA',
        payload: statCalculator(),
      });
    }

    setReRolledCount((reRolledCount) => reRolledCount - 1);
    updateReRolls(reRolledCount);
  };

  const updateReRolls = (reRolledCount) => {
    /*Print Re-Rolls messages*/
    if (reRolledCount === 0) {
      setRollsMessage('You have roll all your chances. Congrats! You are ready to begin your epic journey.');

      const reRollButtons = document.querySelectorAll('.reRollButtons');
      reRollButtons.forEach((button) => {
        button.disabled = true;
        button.setAttribute('id', 'inactiveButton');
      });
    } else {
      setRollsMessage(`Great! You have ${reRolledCount} chances left to re-roll one of the stat's score you have get. Good Luck!`);
    }
  };

  const createStats = (stats) => {
    /*Set States and Continue */
    setStats(stats);
    setScreen('Main');
  };

  return (
    <>
      <section className="dice-rolls-screen">
        <div className="dice-roll-table-container">
          <p className="dice-rolls-info">
            First, let's generate your <strong>Character's Stats</strong> numbers. They'll be usefull to make a good choice of skills and proficiencies for your character.
            <br />
          </p>
          <p className="divider"></p>
          <p className="re-roll-message">{reRollsMessage}</p>
          <h4>Roll your dices</h4>
          <table className="stats-table">
            <tbody>
              <tr>
                <th>Stats</th>
                <th>Score</th>
              </tr>
              <tr>
                <td> CON</td>
                <td>
                  <span className="stats-scores">{stats.CON}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="CON"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
              <tr>
                <td>STR</td>
                <td>
                  <span className="stats-scores">{stats.STR}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="STR"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
              <tr>
                <td>DEX</td>
                <td>
                  <span className="stats-scores">{stats.DEX}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="DEX"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
              <tr>
                <td>INT</td>
                <td>
                  <span className="stats-scores">{stats.INT}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="INT"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
              <tr>
                <td>WIS</td>
                <td>
                  <span className="stats-scores">{stats.WIS}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="WIS"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
              <tr>
                <td>CHA</td>
                <td>
                  <span className="stats-scores">{stats.CHA}</span>
                </td>
                <td>
                  <input
                    type="button"
                    value="Re-Roll!"
                    className="re-roll-buttons"
                    id="CHA"
                    onClick={reRollStatDice}
                    style={isDiceRolled ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="screen-buttons-container">
            <input type="button" value="Stats Info" className="screen-buttons info-screen-button" onClick={() => setStatsInfoOpen(true)} />
            <input type="button" value="Roll Dice!" className="screen-buttons" onClick={generateStats} disabled={isDiceRolled ? true : false} />
            <input type="button" value="Continue" className="screen-buttons" id={isDiceRolled ? 'activeButton' : 'inactiveButton'} onClick={() => createStats(stats)} />
          </div>
        </div>
        <div className="stats-description">
          <p>
            Each character has six ability scores that represent his character's most basic attributes. They are his raw talent and prowess. These scores, and the modifiers they create, affect nearly
            every aspect of a character's skills and abilities. Each ability score generally ranges from 3 to 18, although racial bonuses and penalties can alter this; an average ability score is 10.
          </p>
          <h5>Stats Characteristics</h5>
          <p className="divider"></p>
          <p>Each ability partially describes your character and affects some of his actions:</p>
          <ul>
            <li>
              <h6>Constitution CON</h6>
              Represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes.
            </li>
            <li>
              <h6>Strength STR</h6>
              Measures muscle and physical power. This ability is important for those who engage in hand-to-hand combat, such as fighters, monks, paladins, and some rangers.
            </li>
            <li>
              <h6>Dextery DEX</h6>
              measures agility, reflexes, and balance. This ability is the most important one for rogues, but it's also useful for characters who wear light or medium armor or no armor at all.
            </li>
            <li>
              <h6>Intelligence INT</h6>
              determines how well your character learns and reasons. This ability is important for wizards because it affects their spellcasting ability in many ways.
            </li>
            <li>
              <h6>Wisdom WIS</h6>
              describes a character's willpower, common sense, awareness, and intuition. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers.
            </li>
            <li>
              <h6>Charism CHA</h6>
              measures a character's personality, personal magnetism, ability to lead, and appearance. It is the most important ability for paladins, sorcerers, and bards. It is also important for
              clerics, since it affects their ability to channel energy
            </li>
          </ul>
        </div>
      </section>
      {isStatsInfoOpen ? (
        <Modal>
          <div className="stats-mobile-description">
            <button onClick={() => setStatsInfoOpen(false)}>Close</button>
            <h5>Stats Characteristics</h5>
            <p className="divider"></p>
            <p>
              Each character has six ability scores that represent his character's most basic attributes. They are his raw talent and prowess. These scores, and the modifiers they create, affect
              nearly every aspect of a character's skills and abilities. Each ability score generally ranges from 3 to 18, although racial bonuses and penalties can alter this; an average ability
              score is 10.
            </p>
            <p><br />Each ability partially describes your character and affects some of his actions:</p>
            <ul>
              <li>
                <h6>Constitution CON</h6>
                Represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes.
              </li>
              <li>
                <h6>Strength STR</h6>
                Measures muscle and physical power. This ability is important for those who engage in hand-to-hand combat, such as fighters, monks, paladins, and some rangers.
              </li>
              <li>
                <h6>Dextery DEX</h6>
                measures agility, reflexes, and balance. This ability is the most important one for rogues, but it's also useful for characters who wear light or medium armor or no armor at all.
              </li>
              <li>
                <h6>Intelligence INT</h6>
                determines how well your character learns and reasons. This ability is important for wizards because it affects their spellcasting ability in many ways.
              </li>
              <li>
                <h6>Wisdom WIS</h6>
                describes a character's willpower, common sense, awareness, and intuition. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and
                rangers.
              </li>
              <li>
                <h6>Charism CHA</h6>
                measures a character's personality, personal magnetism, ability to lead, and appearance. It is the most important ability for paladins, sorcerers, and bards. It is also important for
                clerics, since it affects their ability to channel energy
              </li>
            </ul>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default StatsGenerator;

//Apply changes with useReducer parameters on screen's changes
