import React, { useState ,useContext, useEffect } from "react";
import "./StatsGenerator.css"
import { GameDataContext } from "../../context/GameDataContext";

function StatsGenerator(){

    const  { setStats, setScreen }  = useContext(GameDataContext)
    const [diceRolled, setDiceRolled] = useState(false)

    const createStatsObj = (diceRolls) => ({
        /*Constructor */
        CON: diceRolls.CONScore,
        STR: diceRolls.STRScore,
        DEX: diceRolls.DEXScore,
        WIS: diceRolls.WISScore,
        INT: diceRolls.INTScore,
        CHA: diceRolls.CHAScore,

        characterHeight: ((Math.random().toFixed(2) * 2) + 5)+ " feets",
    })

    const reRollMessage = document.getElementById("reRollMessage")
    const statsScores = Array.from(document.getElementsByClassName("statsScores"))
    const reRollButtons = Array.from(document.getElementsByClassName("reRollButtons"))
    let diceRolls = {}
    let reRolledCount = 3

    const statCalculator = () => Math.floor(Math.random()* 12) + 7 

    const diceRoll = () => {
        setDiceRolled(true)
    }

    useEffect (() => {
        /*Create and Print diceRolls values*/
        statsScores.forEach((stat) => {
            let statScore = statCalculator()
            stat.innerHTML = statScore
            diceRolls[stat.id] = statScore
        })
    }, [statsScores])
    
    const reRollStatDice = (e) => {
        /*Re-calculate diceRolls values */
        if(reRolledCount > 0){
           let stat = e.target.id
            let statScore = document.getElementById(stat + "Score")
            let reRollScore = statCalculator()
            statScore.innerHTML = reRollScore
    
            if(stat === "CON"){
                diceRolls.CONScore = reRollScore
                
            } else if(stat === "STR"){
                diceRolls.STRScore = reRollScore
                
            } else if(stat === "DEX"){
                diceRolls.DEXScore = reRollScore
                 
            } else if(stat === "INT"){
                diceRolls.INTScore = reRollScore
                
            } else if(stat === "WIS"){
                diceRolls.WISScore = reRollScore
                
            } else if(stat === "CHA"){
                diceRolls.CHAScore = reRollScore
                
            }
    
            reRolledCount--
            updateReRolls() 
        } 
    }

    

    const updateReRolls = () => {
        /*Print Re-Rolls messages*/
        if(reRolledCount === 0){
            reRollMessage.innerHTML = "You've roll all your chances. Congrats! You're ready to begin your epic journey."
            reRollButtons.forEach((button) => {
                button.disabled = true
            })
        } else 
            reRollMessage.innerHTML = `Great! You have ${reRolledCount} chances to re-roll one of the stat's score you have get. Good Luck!`
    }

    const createStats = (diceRolls) => {
        /*Set States and Continue */
        let stats = createStatsObj(diceRolls)
        setStats(stats)
        setScreen("Main")
    }

    return(
        <section className="diceRolls">
            <div className="diceRollTableContainer">
                <p className="beforeRollMessage">
                    First, let's generate your <strong>Character's Stats</strong> numbers. They'll be usefull to make a good choice of skills and proficiencies for your character.<br/>
                </p>
                <p className="divider"></p>
                <p id="reRollMessage" className="afterRollMessage">
                    After roll your dices, you'll have 3 chances to re-roll one stat of your choice if you want to.
                </p>
                <h4>Roll your dices</h4>
                <table className="statsTable">
                    <tbody>    
                        <tr>
                            <th>Stats</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td> CON</td>
                            <td>
                                <span id="CONScore" className="statsScores">0</span>
                            </td>
                             <td>
                                <input  type="button" 
                                        value="Re-Roll!" 
                                        className="reRollButtons" 
                                        id="CON" 
                                        onClick={reRollStatDice} 
                                        style = { diceRolled
                                            ? {opacity: 1, visibility: "visible"}
                                            : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>STR</td>
                            <td>
                                <span id="STRScore" className="statsScores">0</span>
                            </td>
                            <td>
                                <input type="button" value="Re-Roll!" className="reRollButtons" id="STR" 
                                    onClick={reRollStatDice} 
                                    style = {diceRolled 
                                        ? {opacity: 1, visibility: "visible"}
                                        : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>DEX</td>
                            <td><span id="DEXScore" className="statsScores">0</span></td>
                            <td>
                                <input type="button" value="Re-Roll!" className="reRollButtons" id="DEX" 
                                    onClick={reRollStatDice} 
                                    style = {diceRolled 
                                    ? {opacity: 1, visibility: "visible"}
                                    : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>INT</td>
                            <td><span id="INTScore" className="statsScores"> 0</span></td>
                            <td>
                                <input type="button" value="Re-Roll!" className="reRollButtons" id="INT" 
                                    onClick={reRollStatDice} 
                                    style = {diceRolled 
                                    ? {opacity: 1, visibility: "visible"}
                                    : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>WIS</td>
                            <td><span id="WISScore" className="statsScores">0</span></td>
                            <td>
                                <input type="button" value="Re-Roll!" className="reRollButtons" id="WIS" 
                                    onClick={reRollStatDice} 
                                    style = {diceRolled 
                                    ? {opacity: 1, visibility: "visible"}
                                    : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>CHA</td>
                            <td><span id="CHAScore" className="statsScores">0</span></td>
                            <td>
                                <input type="button" value="Re-Roll!" className="reRollButtons" id="CHA" 
                                    onClick={reRollStatDice} 
                                    style = {diceRolled 
                                    ? {opacity: 1, visibility: "visible"}
                                    : {opacity: 0, visibility: "hidden"}} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="screenButtonsContainer">
                    <input type="button" value="Return" className="screenButtons" id="continueCharacter3" 
                        onClick={() => setScreen("MainMenuScreen")} 
                    />
                    <input type="button" value="Roll Dice!" className="screenButtons" id="buttonDice"
                        onClick={diceRoll} disabled={diceRolled ? true : false} 
                    />
                    <input type="button" value="Continue" id="continueCharacter3"
                        className={diceRolled ? "screenButtons pulsate-fwd" : "screenButtons"}  
                        onClick={() => createStats(diceRolls)} 
                    />
                </div>
            </div>
            <div className="statsDescription">
                <p>
                    Each character has six ability scores that represent his
                    character's most basic attributes. They are his raw talent
                    and prowess. These scores, and the modifiers
                    they create, affect nearly every aspect of a character's skills
                    and abilities. Each ability score generally ranges from 3 to
                    18, although racial bonuses and penalties can alter this; an
                    average ability score is 10.
                </p>
                <h5>Stats Characteristics</h5>
                <p className="divider"></p>
                <p>
                    Each ability partially describes your character and affects
                    some of his actions:
                </p>
                <ul>
                    <li>
                        <h6>Constitution CON</h6>
                        Represents your character's health and
                        stamina. A Constitution bonus increases a character's
                        hit points, so the ability is important for all classes. 
                    </li>
                    <li>
                        <h6>Strength STR</h6>
                        Measures muscle and physical power. This ability
                        is important for those who engage in hand-to-hand combat, 
                        such as fighters, monks, paladins, and
                        some rangers.
                    </li>
                    <li>
                        <h6>Dextery DEX</h6>
                        measures agility, reflexes, and balance. This
                        ability is the most important one for rogues, but it's also
                        useful for characters who wear light or medium armor or
                        no armor at all.
                    </li>
                    <li>
                        <h6>Intelligence INT</h6>
                        determines how well your character learns
                        and reasons. This ability is important for wizards because
                        it affects their spellcasting ability in many ways.
                    </li>
                    <li>
                        <h6>Wisdom WIS</h6>
                        describes a character's willpower, common sense,
                        awareness, and intuition. Wisdom is the most important
                        ability for clerics and druids, and it is also important for
                        paladins and rangers.
                    </li>
                    <li>
                        <h6>Charism CHA</h6>
                        measures a character's personality, personal
                        magnetism, ability to lead, and appearance. It is the most
                        important ability for paladins, sorcerers, and bards. It
                        is also important for clerics, since it affects their ability
                        to channel energy
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default StatsGenerator

//Apply changes with useReducer parameters on screen's changes
//Test useReducer format for dice values manipulation. Export them directly from this component. This will solve the innerHTML usage issue and the logic complexity.